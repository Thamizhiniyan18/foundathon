"use server";

import api from "api";
import { writeFile } from "fs";

const sdk = api("@virustotal/v3.0#40nj53llc655dro");

export async function vtUpload(formData: FormData) {
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  // const fileStream = fs.createReadStream(arrayBuffer);

  writeFile(`${file.name}`, buffer, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File written successfully.");
    
  });

  // /home/thamizhiniyan/Documents/foundathon/lib/vtActions.ts

  // sdk
  //   .postFiles({ file: file }, { "x-apikey": process.env.VT_API_KEY })
  //   .then(({ data }: { data: any }) => console.log(data))
  //   .catch((err: any) => console.error(err));

  // const form = new FormData();
  // form.append(
  //   "file",
  //   "data:application/octet-stream;name=test;base64,c2FvaWRmaHNhbGtnbGthc2xrZ2psa2pza2xmYWtsZ2psa3NnZGtsamxrYWdrbGFqZ2tqd2tsZwo="
  // );

  // const options: { method: string; headers: {}; body?: any } = {
  //   method: "POST",
  //   headers: { accept: "application/json", "x-apikey": process.env.VT_API_KEY },
  // };

  // options.body = form;

  // fetch("https://www.virustotal.com/api/v3/files", options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "x-apikey":
  //         "04451a9bd610836831241b436c92544e8dd6b85462ee383990da87a52c357234",
  //     },
  //     body: formData,
  //   };

  //   fetch("https://www.virustotal.com/api/v3/files", options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //         console.log(response)
  //     //   const analysisId = response.data.id;
  //     //   console.log("Analysis ID:", analysisId);
  //     })
  //     .catch((err) => console.error(err));
}
