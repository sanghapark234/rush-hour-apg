#!/bin/sh
# Rebuilds diorama/assets from the original Poly Haven downloads (CC0, polyhaven.com).
# Usage: tools/assets.sh <source-dir> [<assets-dir>]
# The source directory holds, with the Poly Haven file names:
#   artist_workshop_8k.jpg, artist_workshop_1k.hdr,
#   asphalt_02_{diff,arm,nor_gl}_1k.jpg, plywood_diff_1k.jpg,
#   models/<name>/<name>.gltf with its .bin and textures/ (the "1k glTF" download, renamed).
# Needs cwebp (libwebp), magick (ImageMagick, HDRI build) and bun.
set -eu
src=$1
out=${2:-"$(dirname "$0")/../assets"}
mkdir -p "$out/models"

# Backdrop photo: a 2k version for the first frame and a 6k version that replaces it.
cwebp -quiet -q 80 -resize 2048 1024 "$src/artist_workshop_8k.jpg" -o "$out/artist_workshop_2k.webp"
cwebp -quiet -q 82 -resize 6144 3072 "$src/artist_workshop_8k.jpg" -o "$out/artist_workshop_6k.webp"

# Lighting map: image-based lighting is blurred before use, so 512 x 256 is enough.
magick "$src/artist_workshop_1k.hdr" -filter Box -resize 512x256 "$out/artist_workshop_512.hdr"

# Surface textures. The normal map keeps a higher quality: its errors show as lighting errors.
cwebp -quiet -q 75 "$src/asphalt_02_diff_1k.jpg" -o "$out/asphalt_02_diff_1k.webp"
cwebp -quiet -q 75 "$src/asphalt_02_arm_1k.jpg" -o "$out/asphalt_02_arm_1k.webp"
cwebp -quiet -q 85 "$src/asphalt_02_nor_gl_1k.jpg" -o "$out/asphalt_02_nor_gl_1k.webp"
cwebp -quiet -q 82 "$src/plywood_diff_1k.jpg" -o "$out/plywood_diff_1k.webp"

# Models: one binary file each, Meshopt-compressed geometry, WebP textures.
# The scene code finds parts by name, so nothing is joined, flattened or simplified.
for name in desk_lamp_arm_01 measuring_tape_01 pliers potted_plant_04 screwdrivers_02 spray_paint_bottles street_lamp_01 wooden_table_02; do
  bunx @gltf-transform/cli@latest optimize "$src/models/$name/$name.gltf" "$out/models/$name.glb" \
    --compress meshopt --texture-compress webp --texture-size 1024 \
    --simplify false --palette false --flatten false --join false --instance false
done
