'use strict';

const dataStores = require('@f5devcentral/atg-storage');

const FsSchemaProvider = require('./lib/schema_provider').FsSchemaProvider;
const { FsTemplateProvider, FsSingleTemplateProvider, DataStoreTemplateProvider } = require('./lib/template_provider');
const { Template, mergeStrategies, postProcessStrategies } = require('./lib/template');
const guiUtils = require('./lib/gui_utils');
const TransactionLogger = require('./lib/transaction_logger');

module.exports = {
    FsSchemaProvider,
    FsTemplateProvider,
    FsSingleTemplateProvider,
    DataStoreTemplateProvider,
    Template,
    mergeStrategies,
    postProcessStrategies,
    guiUtils,
    dataStores,
    TransactionLogger
};
