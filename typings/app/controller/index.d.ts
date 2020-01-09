// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportMessageBoard = require('../../../app/controller/messageBoard');
import ExportToken = require('../../../app/controller/token');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    messageBoard: ExportMessageBoard;
    token: ExportToken;
  }
}
