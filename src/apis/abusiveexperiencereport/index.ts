// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {abusiveexperiencereport_index} from './index';
import {abusiveexperiencereport_v1} from './v1';

export const VERSIONS = {
  index: abusiveexperiencereport_index.Abusiveexperiencereport,
  v1: abusiveexperiencereport_v1.Abusiveexperiencereport,
};

export function abusiveexperiencereport(
  version: 'index'
): abusiveexperiencereport_index.Abusiveexperiencereport;
export function abusiveexperiencereport(
  options: abusiveexperiencereport_index.Options
): abusiveexperiencereport_index.Abusiveexperiencereport;
export function abusiveexperiencereport(
  version: 'v1'
): abusiveexperiencereport_v1.Abusiveexperiencereport;
export function abusiveexperiencereport(
  options: abusiveexperiencereport_v1.Options
): abusiveexperiencereport_v1.Abusiveexperiencereport;
export function abusiveexperiencereport<
  T =
    | abusiveexperiencereport_index.Abusiveexperiencereport
    | abusiveexperiencereport_v1.Abusiveexperiencereport
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'index'
    | abusiveexperiencereport_index.Options
    | 'v1'
    | abusiveexperiencereport_v1.Options
) {
  return getAPI<T>('abusiveexperiencereport', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
