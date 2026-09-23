import { ImageResponse } from 'next/og';

// Home-screen icon for iOS; same "FM" mark as app/icon.tsx at 180x180.
export const size = {
    width: 180,
    height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#2563eb',
                    color: 'white',
                    fontSize: 80,
                    fontWeight: 600,
                }}
            >
                FM
            </div>
        ),
        {
            ...size,
        }
    );
}
