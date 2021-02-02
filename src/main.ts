/*!

 =========================================================
 * Simplecodestuffs-training-demo Angular - v1.4.0
 =========================================================

 * Product Page: https://www.thangamanistores.com/product/simplecodestuffs-training-demo-2-angular
 * Copyright 2020 Simplecodestuffs (https://www.simplecodestuffs.com)
 * Licensed under MIT (https://github.com/timcreative/simplecodestuffs-training-demo/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
