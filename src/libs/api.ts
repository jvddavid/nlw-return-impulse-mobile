/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
api.ts (c) 2022
Desc: description
Created:  2022-05-06T18:35:48.238Z
Modified: 2022-05-06T18:36:23.056Z
*/

import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.100:3333",
})
