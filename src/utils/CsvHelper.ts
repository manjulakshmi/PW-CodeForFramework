//download 3rd party lib npm run csv-parse


import fs from "fs"; //file system import

import {parse} from 'csv-parse/sync';  // dependency which we downloaded

export class CsvHelper{


    static readCsv(filePath:string)
    {
        parse(fs.readFileSync(filePath,'utf-8'),{
            columns:true,   //first row as header not testdata
            skip_empty_lines:true, 
            trim:true,
        }) as Record<string,string>[];
    }
}
