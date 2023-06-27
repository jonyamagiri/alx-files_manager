/* eslint-disable import/no-extraneous-dependencies */
import supertest from 'supertest';
import chai from 'chai';
import api from '../server';

// Setting server API as a global variable
global.app = api;

// Setting supertest function as a global variable for making HTTP requests
global.request = supertest(api);

// Setting expect and assert functions from chai as global variables for assertions
global.expect = chai.expect;
global.assert = chai.assert;
