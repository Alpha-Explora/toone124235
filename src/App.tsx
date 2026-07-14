export interface AppProps {
  title?: string;
}

export function App({ title = 'toone124235' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}