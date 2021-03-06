/*
 * Copyright (C) 2018 David Craven and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ContainerModule } from 'inversify';
import { LanguageClientContribution } from '@theia/languages/lib/browser';
import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate';
import { RustClientContribution } from './rust-client-contribution';
import { RustGrammarContribution } from './rust-grammar-contribution';

export default new ContainerModule(bind => {
    bind(RustClientContribution).toSelf().inSingletonScope();
    bind(LanguageClientContribution).toDynamicValue(ctx =>
        ctx.container.get(RustClientContribution)).inSingletonScope();
    bind(LanguageGrammarDefinitionContribution).to(RustGrammarContribution)
        .inSingletonScope();
});
