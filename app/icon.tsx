import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 16,
          background: "#188bf6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "50%",
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        NK
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
