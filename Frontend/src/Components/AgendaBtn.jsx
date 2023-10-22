import React, { useState, useEffect } from 'react'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const AgendaBtn = function () {
  return(
    <button className="bg-gray-300 w-10 h-10 hover:bg-gray-400">A</button>
  );
}

export default AgendaBtn;