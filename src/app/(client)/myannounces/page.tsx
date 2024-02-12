import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Meus Anúncios'
}
const MyAnnounces: React.FC = () => {
  return (
    <main className="w-screen h-auto">
        <h1>Meus Anuncios</h1>
    </main>
  );
};

export default MyAnnounces;