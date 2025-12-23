interface ImageModule {
  default: string;
}

// Auto import all images & svgs recursively
const imageModules = import.meta.glob<ImageModule>(
  "./**/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);

// Convert to clean object with proper typing
const Assets: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const key = path
      .replace("./", "")
      .replace(/\.(png|jpg|jpeg|svg|webp)$/, "")
      .replace(/\//g, "_");

    return [key, module.default];
  })
);

export default Assets;
