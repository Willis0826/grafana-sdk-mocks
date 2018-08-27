///<reference path="../../headers/common.d.ts" />

export class AlertTabCtrl {
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

    /** @ngInject */
    constructor(
        private $scope,
        private backendSrv,
        private dashboardSrv,
        private uiSegmentSrv,
        private $q,
        private datasourceSrv
    ) {

    }

    $onInit() {
        return this.backendSrv.get('/api/alert-notifications').then(res => {
        });
    }

    getAlertHistory() {

    }

    getNotificationIcon(type): string {
        return '';
    }

    getNotifications() {
        return Promise.resolve(
            this.notifications.map(item => {
                return this.uiSegmentSrv.newSegment(item.name);
            })
        );
    }

    changeTabIndex(newTabIndex) {

    }

    notificationAdded() {

    }

    removeNotification(index) {

    }

    initModel() {

    }

    graphThresholdChanged(evt) {

    }

    buildDefaultCondition() {
        return {
            type: 'query',
            query: { params: ['A', '5m', 'now'] },
            reducer: { type: 'avg', params: [] },
            evaluator: { type: 'gt', params: [null] },
            operator: { type: 'and' },
        };
    }

    validateModel() {

    }

    buildConditionModel(source) {
        return { source: source, type: source.type };
    }

    handleQueryPartEvent(conditionModel, evt) {
        return this.$q.when([]);
    }

    handleReducerPartEvent(conditionModel, evt) {
        return this.$q.when([]);
    }

    addCondition(type) {

    }

    removeCondition(index) {

    }

    delete() {

    }

    enable() {

    }

    evaluatorParamsChanged() {

    }

    evaluatorTypeChanged(evaluator) {

    }

    clearHistory() {

    }

    test() {

    }
}

/** @ngInject */
export function alertTab() {
    'use strict';
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'public/app/features/alerting/partials/alert_tab.html',
        controller: AlertTabCtrl,
    };
}
