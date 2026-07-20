// A template re-mounts on every navigation, so this wrapper replays a subtle
// fade-and-rise transition each time the user moves between pages.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-pageIn">{children}</div>;
}
