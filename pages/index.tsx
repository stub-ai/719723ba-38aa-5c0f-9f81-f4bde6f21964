import ImageWithTooltip from '../components/ImageWithTooltip';

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center items-center min-h-screen p-24">
      <ImageWithTooltip src="/path/to/image1.jpg" alt="Image 1" tooltip="This is image 1" />
      <ImageWithTooltip src="/path/to/image2.jpg" alt="Image 2" tooltip="This is image 2" />
      <ImageWithTooltip src="/path/to/image3.jpg" alt="Image 3" tooltip="This is image 3" />
    </main>
  );
}