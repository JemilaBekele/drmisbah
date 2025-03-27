import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const DigitalTransformation = () => {
  return (
    <>
      <LegacyIntroductionSection />
      <CuttingEdgeTechnology />
      <CoffeeExportSection />
      <FruitExportSection/>
      <ConstructionSection/>


    </>
  );
};
export default DigitalTransformation;

const CuttingEdgeTechnology = () => {
  return (
    <section className="">
      <div className="container mx-auto py-12 md:py-28 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-7 md:order-2">
            <div>
              <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
                Innovation in Local Markets
              </h6>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                Pioneering Eco-Friendly Solutions
              </h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
  Hope Business Group pioneers sustainable transport with <strong>Miichu</strong>, offering hybrid electric cycles and stand-up adult scooters for both purchase and shared use through the Miichu app.
</p>

              <Button className="text-white" variant="default" asChild>
                <Link href="/contact-us">
                  <i className="uil uil-envelope mr-2" /> Get in Touch
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 md:order-1">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={"/miii.jpg"}
                alt="Innovative Technology"
                className="rounded-lg shadow-lg object-cover object-center"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LegacyIntroductionSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-l">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/med.jpg"
                  alt="Digital Transformation"
                  className="object-cover object-center"
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:order-1">
            <div>
              <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
                Import and Distribution of Medicines and Medical Equipment
              </h6>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                HOPE Pharmaceuticals and Medical Equipment PLC
              </h3>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                At HOPE, we specialize in the import and distribution of high-quality medicines and medical supplies sourced from trusted manufacturers in India, Turkey, and China. Our commitment to excellence ensures that healthcare providers and communities have access to reliable and innovative medical solutions. Partner with us to experience seamless service, global expertise, and a dedication to improving health outcomes.
              </p>

              <Button className="text-white" variant="default" asChild>
                <Link href="/contact-us">
                  <i className="uil uil-envelope mr-2" /> Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const CoffeeExportSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-l">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/coffee.jpg"
                  alt="Coffee Export"
                  className="object-cover object-center"
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:order-1">
            <div>
              <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
                Exporting Ethiopia’s Finest Coffee
              </h6>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                Connecting Ethiopia to Global Markets
              </h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
  We export premium &quot;Coffee Arabica&quot; to the Middle East and Asia, ensuring the highest quality while supporting local farmers.
</p>


              <Button className="text-white" variant="default" asChild>
                <Link href="/contact-us">
                  <i className="uil uil-envelope mr-2" /> Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FruitExportSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6">
            <div className="rounded-lg overflow-hidden shadow-l">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/oillll.jpg"
                  alt="Fruit Export"
                  className="object-cover object-center"
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
          <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
  Exporting Premium Agricultural Products Worldwide
</h6>
<h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
  Supplying Global Markets with Quality & Freshness
</h3>
<p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
  We export premium oil seeds, pulses, fresh fruits, and vegetables to India, China, and the Middle East, ensuring top-quality standards while supporting Ethiopian agriculture.
</p>

            <Button className="text-white" variant="default" asChild>
              <Link href="/contact-us">
                <i className="uil uil-envelope mr-2" /> Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConstructionSection = () => {
  return (



    <section className="bg-gray-200">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-l">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/constru.jpg"
                  alt="Oil and Pulses Export"
                  className="object-cover object-center"
                  layout="fill"
                />
              </div>
            </div>
          </div>
   <div className="md:col-span-6">
   <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
  Building Ethiopia&apos;s Future
</h6>

            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Premium Construction Materials Supply
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
  Hope Business Group has expanded into the construction sector, supplying the market with top-quality building materials.
</p>

            <Button className="text-white" variant="default" asChild>
              <Link href="/contact-us">
                <i className="uil uil-envelope mr-2" /> Get in Touch
              </Link>
            </Button>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export { CoffeeExportSection, FruitExportSection };




