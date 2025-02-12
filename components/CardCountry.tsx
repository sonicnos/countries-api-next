import Image from "next/image";

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

const CardCountry = ({ data }: { data: Country }) => {
  return (
    <div className="border rounded-2xl h-[400px] w-[300px] flex flex-col overflow-hidden">
      <div className="w-full h-[60%]">
        <img
          src={data.flags.png}
          alt="country flag"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">{data.name.common}</div>
    </div>
  );
};

export default CardCountry;
