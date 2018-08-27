/// <reference path="./es6-shim/es6-shim.d.ts" />

// dummy modules
declare module 'app/core/config' {
  var config: any;
  export default config;
}

declare module 'app/core/core_module' {
  var coreModule: any;
  export default coreModule;
}

declare module 'lodash' {
  var lodash: any;
  export default lodash;
}

declare module 'moment' {
  var moment: any;
  export default moment;
}

declare module 'angular' {
  var angular: any;
  export default angular;
}

declare module 'jquery' {
  var jquery: any;
  export default jquery;
}

declare module 'q' {
  var q: any;
  export default q;
}

declare module 'app/core/time_series2' {
  export var time_series2: any;
  export default class TimeSeries {
    constructor(opts);
    datapoints: any;
    id: string;
    label: string;
    alias: string;
    aliasEscaped: string;
    color: string;
    valueFormater: any;
    stats: any;
    legend: boolean;
    allIsNull: boolean;
    allIsZero: boolean;
    decimals: number;
    scaledDecimals: number;
    hasMsResolution: boolean;
    isOutsideRange: boolean;
    lines: any;
    dashes: any;
    bars: any;
    points: any;
    yaxis: any;
    zindex: any;
    stack: any;
    nullPointMode: any;
    fillBelowTo: any;
    transform: any;
    flotpairs: any;
    unit: any;
    applySeriesOverrides(overrides): void;
    getFlotPairs(fillStyle): any[];
    updateLegendValues(formater, decimals, scaledDecimals): void;
    formatValue(value): any;
    isMsResolutionNeeded(): boolean;
    hideFromLegend(options): boolean;
    setColor(color): void;
  }
  export function updateLegendValues(data, panel, height): void;
  export function getDataMinMax(data): any;
}

declare module 'app/core/table_model' {
  var table_model: any;
  export default table_model;
}

declare module 'app/core/utils/file_export' {
  var file_export: any;
  export default file_export;
}

declare module 'app/core/utils/flatten' {
  var flatten: any;
  export default flatten;
}

declare module 'app/core/utils/kbn' {
  var kbn: any;
  export default kbn;
  // var interval_regex: string;
  // var intervals_in_seconds: string;
  // var formatBuilders: any;
  // var valueFormats: any;

  // export function round_interval(interval: number): number;
  // export function secondsToHms(seconds: number): string;
  // export function to_percent(number: number, outof: number): string;
  // export function calculateInterval(range: any, resolution: any, userInterval: any);
  // export function describe_interval(string: string): any;
  // export function interval_to_ms(string: string): number;
  // export function interval_to_seconds(string: string): number;
  // export function query_color_dot(color: string, diameter: string|number): string;
  // export function slugifyForUrl(str: string): string;
  // export function stringToJsRegex(str: string): RegExp;
  // export function toFixed(value: any, decimals: any): any;
  // export function toFixedScaled(value: any, decimals: any, scaledDecimals: any, additionalDecimals: any, ext: any);
  // export function roundValue(num: number, decimals: number): number;
  // export function toDuration(size, decimals, timeScale): string;
  // export function getUnitFormats(): any;
}

declare module 'app/core/store' {
  var store: any;
  export default store;
}

declare module 'app/core/app_events' {
  var appEvents: any;
  export default appEvents;
}

declare module 'tether' {
  var config: any;
  export default config;
}

declare module 'tether-drop' {
  var config: any;
  export default config;
}

declare module 'eventemitter3' {
  var config: any;
  export default config;
}

declare module 'app/core/utils/datemath' {
  export function parse(text: any, roundUp?: any): any;
  export function isValid(text: any): any;
  export function parseDateMath(mathString: any, time: any, roundUp?: any): any;
}

declare module 'app/core/core' {
  export class TimeSeries {
    constructor();
  }
  export var appEvents;
  export var coreModule: any;
  export function updateLegendValues(data, panel, graphHeight): any;
}

declare module 'app/plugins/sdk' {
  export class PanelCtrl {
    constructor($scope: any, $injector: any);
    panel: any;
    error: any;
    row: any;
    dashboard: any;
    editorTabIndex: number;
    pluginName: string;
    pluginId: string;
    editorTabs: any;
    $scope: any;
    $injector: any;
    $timeout: any;
    fullscreen: boolean;
    inspector: any;
    editModeInitiated: boolean;
    editorHelpIndex: number;
    editMode: any;
    height: any;
    containerHeight: any;
    events: any;
    timing: any;
    init(): void;
    renderingCompleted(): void;
    refresh(): void;
    publishAppEvent(evtName: any, evt: any): void;
    changeView(fullscreen: boolean, edit: boolean): void;
    viewPanel(): void;
    editPanel(): void;
    exitFullscreen(): void;
    initEditMode(): void;
    changeTab(newIndex: any): void;
    addEditorTab(title: any, directiveFn: any, index?: any): void;
    getMenu(): any;
    getExtendedMenu(): any;
    otherPanelInFullscreenMode(): boolean;
    calculatePanelHeight(): void;
    render(payload?: any): void;
    toggleEditorHelp(index: any): void;
    duplicate(): void;
    updateColumnSpan(span: any): void;
    removePanel(): void;
    editPanelJson(): void;
    replacePanel(newPanel: any, oldPanel: any): void;
    sharePanel(): void;
    getInfoMode(): void;
    getInfoContent(options: any): void;
    openInspector(): void;
  }
  export class MetricsPanelCtrl extends PanelCtrl {
    constructor($scope: any, $injector: any);
    scope: any;
    loading: boolean;
    datasource: any;
    datasourceName: any;
    $q: any;
    $timeout: any;
    datasourceSrv: any;
    timeSrv: any;
    templateSrv: any;
    timing: any;
    range: any;
    interval: any;
    intervalMs: any;
    resolution: any;
    timeInfo: any;
    skipDataOnInit: boolean;
    dataStream: any;
    dataSubscription: any;
    dataList: any;
    nextRefId: string;
    setTimeQueryStart(): void
    setTimeQueryEnd(): void
    updateTimeRange(datasource?): void
    calculateInterval(): void
    applyPanelTimeOverrides(): void
    issueQueries(datasource): void
    handleQueryResult(result): void
    handleDataStream(stream): void
    setDatasource(datasource): void
    addQuery(target): void
    removeQuery(target): void
    moveQuery(target, direction): void;
  }
  export class QueryCtrl {
    constructor($scope: any, $injector: any);
    target: any;
    panelCtrl: any;
    panel: any;
    datasource: any;
    hasRawMode: boolean;
    error: string;

    refresh(): void;
  }
  export class AlertTabCtrl {
    constructor($scope: any, backendSrv: any, dashboardSrv: any, uiSegmentSrv: any, $q: any, datasourceSrv: any);
    panel: any;
    panelCtrl: any;
    testing: boolean;
    testResult: any;
    subTabIndex: number;
    conditionTypes: any;
    alert: any;
    conditionModels: any;
    evalFunctions: any;
    evalOperators: any;
    noDataModes: any;
    executionErrorModes: any;
    addNotificationSegment;
    notifications;
    alertNotifications;
    error: string;
    appSubUrl: string;
    alertHistory: any;
    $onInit(): any;
    getAlertHistory(): void;
    getNotificationIcon(type): string;
    getNotifications(): any;
    changeTabIndex(newTabIndex): void;
    notificationAdded(): void;
    removeNotification(index): void;
    initModel(): void;
    graphThresholdChanged(evt): void;
    buildDefaultCondition(): any;
    validateModel(): any;
    buildConditionModel(source): any;
    handleQueryPartEvent(conditionModel, evt): any;
    handleReducerPartEvent(conditionModel, evt): any;
    addCondition(type): void;
    removeCondition(index): void;
    delete(): void;
    enable(): void;
    evaluatorParamsChanged(): void;
    evaluatorTypeChanged(evaluator): void;
    clearHistory(): void;
    test(): void;
  }
  export function alertTab(): any;
  export function loadPluginCss(options: any): void;
}

declare module 'app/core/utils/colors' {
  var colors: string[];
  export default colors;
  export const PALETTE_ROWS: number;
  export const PALETTE_COLUMNS: number;
  export const DEFAULT_ANNOTATION_COLOR: string;
  export const OK_COLOR: string;
  export const ALERTING_COLOR: string;
  export const NO_DATA_COLOR: string;
  export const REGION_FILL_ALPHA: number;
}

declare module 'app/core/utils/ticks' {
  export function tickStep(start, stop, count): number;
  export function getFlotTickDecimals(datamin, datamax, axis, height): any;
}

declare module 'app/features/annotations/all' {
  export class EventManager {
    constructor(ctrl);
    addFlotEvents(annotations, options): any;
    updateTime(time): any;
  }
}

declare module 'app/core/components/query_part/query_part' {
  export class QueryPartDef {
    constructor(init);
  }
  export class QueryPart {
    constructor(param, param2);
  }
}

declare module 'baron/baron' {
  export default function baron(param): void;
}

declare module 'Users/zhouweiting/go/src/github.com/grafana/grafana/data/plugins/trend-graph/baron/baron' {
  export default function baron(param): void;
}

declare module 'tinycolor2' {
  export default function tinycolor(string): any;
}
