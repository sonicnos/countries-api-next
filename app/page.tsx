"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardCountry from "@/components/CardCountry";
import Image from "next/image";
interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was an error making the request!", error);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold m-10">
        Country of the World
      </h1>
      <div className="flex flex-wrap justify-center gap-3 m-10">
        {data.map((country: Country, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <Card className="h-[400px] w-[300px] overflow-hidden text-start ">
                <div className="relative h-52">
                  <Image
                    src={country.flags.svg || "/placeholder.svg"}
                    alt={`Flag of ${country.name.common}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    {country.name.common}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold">
                    Capital:{" "}
                    <span className="font-normal">
                      {country.capital || "n/a"}
                    </span>
                  </p>

                  <p className="font-bold">
                    Population:{" "}
                    <span className="font-normal">
                      {country.population || "n/a"}
                    </span>
                  </p>

                  <p className="font-bold">
                    Area:{" "}
                    <span className="font-normal">
                      {`${country.area} km²` || "n/a"}
                    </span>
                  </p>
                </CardContent>
              </Card>
              {/* <CardCountry data={country} /> */}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center text-2xl ">
                  {country.name.common}
                </DialogTitle>
                <DialogDescription>
                  <img src={country.flags.png} alt="" className="rounded-md" />
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
