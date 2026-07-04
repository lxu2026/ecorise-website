import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";

function focusOffset(position, axis) {
  const map = {
    centre: 0.5,
    center: 0.5,
    north: axis === "y" ? 0 : 0.5,
    south: axis === "y" ? 1 : 0.5,
    east: axis === "x" ? 1 : 0.5,
    west: axis === "x" ? 0 : 0.5,
  };
  return map[position] ?? 0.5;
}

async function finishPipeline(pipeline, out) {
  await pipeline
    .sharpen({ sigma: 0.5, m1: 0.35, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);
}

/**
 * Crop to aspect ratio without upscaling, or resize with cover (legacy).
 */
export async function processPhoto({
  src,
  input: inputOverride,
  out,
  aspect,
  width,
  height,
  position = "centre",
  fit = "cover",
  /** Shrink foreground in contain mode (e.g. 0.85 = 15% padding). Default 1. */
  scale = 1,
  normalize = false,
  brightness = 1,
  rotate = true,
  rotateAngle = 0,
}) {
  await mkdir(path.dirname(out), { recursive: true });
  const input = inputOverride ?? path.join(ASSETS, src);

  if (aspect && fit === "contain" && width && height) {
    let base = sharp(input);
    if (rotate) base = base.rotate();
    if (rotateAngle) base = base.rotate(rotateAngle);
    if (normalize) base = base.normalize();

    let background = base
      .clone()
      .resize(width, height, { fit: "cover", position, kernel: sharp.kernel.lanczos3 })
      .blur(24);
    if (brightness !== 1) background = background.modulate({ brightness: brightness * 0.9 });

    let foreground = base
      .clone()
      .resize(width, height, { fit: "inside", kernel: sharp.kernel.lanczos3 });
    if (brightness !== 1) foreground = foreground.modulate({ brightness });

    const fgMeta = await foreground.metadata();
    let fgW = fgMeta.width ?? width;
    let fgH = fgMeta.height ?? height;
    if (scale !== 1) {
      fgW = Math.max(1, Math.round(fgW * scale));
      fgH = Math.max(1, Math.round(fgH * scale));
      foreground = sharp(await foreground.toBuffer()).resize(fgW, fgH, {
        kernel: sharp.kernel.lanczos3,
      });
    }
    const fgBuf = await foreground.toBuffer();
    const left = Math.round((width - fgW) / 2);
    const top = Math.round((height - fgH) / 2);

    await finishPipeline(background.composite([{ input: fgBuf, left, top }]), out);
    console.log(`  ${path.basename(out)} (${width}×${height}, contain)`);
    return { outW: width, outH: height };
  }

  if (aspect) {
    let pipeline = sharp(input);
    if (rotate) pipeline = pipeline.rotate();
    if (rotateAngle) pipeline = pipeline.rotate(rotateAngle);
    const meta = await pipeline.metadata();
    const srcW = meta.width ?? 0;
    const srcH = meta.height ?? 0;

    let cropW = srcW;
    let cropH = srcH;
    let left = 0;
    let top = 0;

    if (srcW / srcH > aspect) {
      cropW = Math.round(srcH * aspect);
      left = Math.round((srcW - cropW) * focusOffset(position, "x"));
    } else {
      cropH = Math.round(srcW / aspect);
      top = Math.round((srcH - cropH) * focusOffset(position, "y"));
    }

    pipeline = sharp(input);
    if (rotate) pipeline = pipeline.rotate();
    if (rotateAngle) pipeline = pipeline.rotate(rotateAngle);
    pipeline = pipeline.extract({ left, top, width: cropW, height: cropH });
    if (normalize) pipeline = pipeline.normalize();
    if (brightness !== 1) pipeline = pipeline.modulate({ brightness });

    let outW = cropW;
    let outH = cropH;
    if (width && height) {
      pipeline = pipeline.resize(width, height, {
        fit: "cover",
        position,
        kernel: sharp.kernel.lanczos3,
      });
      outW = width;
      outH = height;
    }

    await finishPipeline(pipeline, out);
    console.log(`  ${path.basename(out)} (${outW}×${outH})`);
    return { srcW, srcH, outW, outH };
  }

  let pipeline = sharp(input);
  if (rotate) pipeline = pipeline.rotate();
  if (normalize) pipeline = pipeline.normalize();
  if (brightness !== 1) pipeline = pipeline.modulate({ brightness });

  const meta = await sharp(input).metadata();
  const maxW = meta.width ?? width;
  const maxH = meta.height ?? height;
  const targetW = Math.min(width, maxW);
  const targetH = Math.min(height, maxH);

  pipeline = pipeline.resize(targetW, targetH, {
    fit: "cover",
    position,
    withoutEnlargement: true,
  });

  await finishPipeline(pipeline, out);
  console.log(`  ${path.basename(out)} (${targetW}×${targetH})`);
}

export { ASSETS };
