import ImageWithTooltip from '../components/ImageWithTooltip';

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center items-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 2xl:p-32">
      <ImageWithTooltip src="/path/to/image1.jpg" alt="Image 1" tooltip="This is image 1" />
      <ImageWithTooltip src="/path/to/image2.jpg" alt="Image 2" tooltip="This is image 2" />
      <ImageWithTooltip src="/path/to/image3.jpg" alt="Image 3" tooltip="This is image 3" />
    </main>
  );
}