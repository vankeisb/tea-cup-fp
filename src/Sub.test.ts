/*
 * MIT License
 *
 * Copyright (c) 2019 Rémi Van Keisbelck
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import { ok, err } from './Result';
import { just, nothing } from './Maybe';
import { expect, test } from 'vitest';
import { Sub } from './Sub';

class MySub extends Sub<string> {
  protected onInit(): void {
    this.dispatch('foobar');
  }

  protected onRelease(): void {
    this.dispatch('foobar');
  }
}

const expectedError = 'Calling dispatch() in sub init/release is forbidden';

test('dispatch in sub init throws error', () => {
  expect(() => {
    new MySub().init((m) => {
      console.log('dispatched', m);
    });
  }).toThrowError(expectedError);
});

test('dispatch in sub release throws error', () => {
  expect(() => {
    new MySub().init((m) => {
      console.log('dispatched', m);
    });
  }).toThrowError(expectedError);
});
