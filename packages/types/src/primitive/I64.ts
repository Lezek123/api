// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Int from '../codec/Int';

/**
 * @name I64
 * @description
 * A 64-bit signed integer
 */
export default class I64 extends Int.with(64) {}
