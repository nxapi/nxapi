import { callDubboFun } from '../rpc/dubbo';
const table = {};
table['IAppBookingService'] = {
  getHotelIds: function() {
    return callDubboFun.bind(this)('IAppBookingService', 'getHotelIds', arguments);
  },
  getHotelNumberNights: function() {
    return callDubboFun.bind(this)('IAppBookingService', 'getHotelNumberNights', arguments);
  },
  getCommentPush: function() {
    return callDubboFun.bind(this)('IAppBookingService', 'getCommentPush', arguments);
  },
  getCommentPushCount: function() {
    return callDubboFun.bind(this)('IAppBookingService', 'getCommentPushCount', arguments);
  },
};
table['IHotelCountService'] = {
  queryBookingCount: function() {
    return callDubboFun.bind(this)('IHotelCountService', 'queryBookingCount', arguments);
  },
};
table['RealTimeDataInfoService'] = {
  queryRealTimeDataInfo: function() {
    return callDubboFun.bind(this)('RealTimeDataInfoService', 'queryRealTimeDataInfo', arguments);
  },
};
table['ICrsBookingService'] = {
  findPaginBooking: function() {
    return callDubboFun.bind(this)('ICrsBookingService', 'findPaginBooking', arguments);
  },
};
table['IOtaBookingService'] = {
  getOtaVo: function() {
    return callDubboFun.bind(this)('IOtaBookingService', 'getOtaVo', arguments);
  },
};
table['ReportService'] = {
  exportOrderSourceDetail: function() {
    return callDubboFun.bind(this)('ReportService', 'exportOrderSourceDetail', arguments);
  },
  countHangList: function() {
    return callDubboFun.bind(this)('ReportService', 'countHangList', arguments);
  },
  queryOrderSourceDetail: function() {
    return callDubboFun.bind(this)('ReportService', 'queryOrderSourceDetail', arguments);
  },
  queryRoomStatusList: function() {
    return callDubboFun.bind(this)('ReportService', 'queryRoomStatusList', arguments);
  },
  queryOrderSourceList: function() {
    return callDubboFun.bind(this)('ReportService', 'queryOrderSourceList', arguments);
  },
  queryHotelInventory: function() {
    return callDubboFun.bind(this)('ReportService', 'queryHotelInventory', arguments);
  },
  queryHangList: function() {
    return callDubboFun.bind(this)('ReportService', 'queryHangList', arguments);
  },
  queryHotelStatus: function() {
    return callDubboFun.bind(this)('ReportService', 'queryHotelStatus', arguments);
  },
  queryOrderSourceDetailCount: function() {
    return callDubboFun.bind(this)('ReportService', 'queryOrderSourceDetailCount', arguments);
  },
  exportHangList: function() {
    return callDubboFun.bind(this)('ReportService', 'exportHangList', arguments);
  },
  queryURN: function() {
    return callDubboFun.bind(this)('ReportService', 'queryURN', arguments);
  },
};
table['CardNoReportService'] = {
  queryRoomCardNoReportDetailExport: function() {
    return callDubboFun.bind(this)('CardNoReportService', 'queryRoomCardNoReportDetailExport', arguments);
  },
  queryRoomCardNoReport: function() {
    return callDubboFun.bind(this)('CardNoReportService', 'queryRoomCardNoReport', arguments);
  },
  queryRoomCardNoReportDetail: function() {
    return callDubboFun.bind(this)('CardNoReportService', 'queryRoomCardNoReportDetail', arguments);
  },
};
table['ICardNoReportService'] = {
  queryRoomCardNoReportDetailExport: function() {
    return callDubboFun.bind(this)('ICardNoReportService', 'queryRoomCardNoReportDetailExport', arguments);
  },
  queryRoomCardNoReport: function() {
    return callDubboFun.bind(this)('ICardNoReportService', 'queryRoomCardNoReport', arguments);
  },
  queryRoomCardNoReportDetail: function() {
    return callDubboFun.bind(this)('ICardNoReportService', 'queryRoomCardNoReportDetail', arguments);
  },
};
table['IReportService'] = {
  querySRN: function() {
    return callDubboFun.bind(this)('IReportService', 'querySRN', arguments);
  },
  queryOrderSourceDetail: function() {
    return callDubboFun.bind(this)('IReportService', 'queryOrderSourceDetail', arguments);
  },
  queryOrderSourceList: function() {
    return callDubboFun.bind(this)('IReportService', 'queryOrderSourceList', arguments);
  },
  exportHangBill: function() {
    return callDubboFun.bind(this)('IReportService', 'exportHangBill', arguments);
  },
  queryHangBill: function() {
    return callDubboFun.bind(this)('IReportService', 'queryHangBill', arguments);
  },
};
table['IInventoryService'] = {
  sellOut: function() {
    return callDubboFun.bind(this)('IInventoryService', 'sellOut', arguments);
  },
  getHotelInventory: function() {
    return callDubboFun.bind(this)('IInventoryService', 'getHotelInventory', arguments);
  },
  queryInventory: function() {
    return callDubboFun.bind(this)('IInventoryService', 'queryInventory', arguments);
  },
};
table['IPmsVerificationService'] = {
  amountCount: function() {
    return callDubboFun.bind(this)('IPmsVerificationService', 'amountCount', arguments);
  },
  findPagingHangingn: function() {
    return callDubboFun.bind(this)('IPmsVerificationService', 'findPagingHangingn', arguments);
  },
  export: function() {
    return callDubboFun.bind(this)('IPmsVerificationService', 'export', arguments);
  },
};
table['ChannelQueryService'] = {
  pageQueryChannel: function() {
    return callDubboFun.bind(this)('ChannelQueryService', 'pageQueryChannel', arguments);
  },
};
table['InventoryQueryService'] = {
  pageQueryInventory: function() {
    return callDubboFun.bind(this)('InventoryQueryService', 'pageQueryInventory', arguments);
  },
};
table['PriceQueryService'] = {
  pageQueryPrice: function() {
    return callDubboFun.bind(this)('PriceQueryService', 'pageQueryPrice', arguments);
  },
};
table['IBankCorrespondentService'] = {
  queryCorrespondent: function() {
    return callDubboFun.bind(this)('IBankCorrespondentService', 'queryCorrespondent', arguments);
  },
};
table['ICrsHotelsService'] = {
  getHotelOyoRateAndShareByUniqueCode: function() {
    return callDubboFun.bind(this)('ICrsHotelsService', 'getHotelOyoRateAndShareByUniqueCode', arguments);
  },
  getHotelInfoByBookingsId: function() {
    return callDubboFun.bind(this)('ICrsHotelsService', 'getHotelInfoByBookingsId', arguments);
  },
};
table['IFlashHotelBillService'] = {
  queryWeekHotelBillList: function() {
    return callDubboFun.bind(this)('IFlashHotelBillService', 'queryWeekHotelBillList', arguments);
  },
  queryMonthHotelBillList: function() {
    return callDubboFun.bind(this)('IFlashHotelBillService', 'queryMonthHotelBillList', arguments);
  },
};
table['IHotelHooFeeAdjustService'] = {
  batchInsert: function() {
    return callDubboFun.bind(this)('IHotelHooFeeAdjustService', 'batchInsert', arguments);
  },
  queryHotelHooFeeAdjust: function() {
    return callDubboFun.bind(this)('IHotelHooFeeAdjustService', 'queryHotelHooFeeAdjust', arguments);
  },
};
table['IHotelWeeklyBillService'] = {
  insertList: function() {
    return callDubboFun.bind(this)('IHotelWeeklyBillService', 'insertList', arguments);
  },
};
table['IOnwerHotelBillService'] = {
  queryHotelBillType: function() {
    return callDubboFun.bind(this)('IOnwerHotelBillService', 'queryHotelBillType', arguments);
  },
  queryHotelBillList: function() {
    return callDubboFun.bind(this)('IOnwerHotelBillService', 'queryHotelBillList', arguments);
  },
  queryHotelBillEGMDetail: function() {
    return callDubboFun.bind(this)('IOnwerHotelBillService', 'queryHotelBillEGMDetail', arguments);
  },
};
table['IOtaBalanceAccountService'] = {
  insertWechatOrAlipayOtaReconResult: function() {
    return callDubboFun.bind(this)('IOtaBalanceAccountService', 'insertWechatOrAlipayOtaReconResult', arguments);
  },
  deleteOtaRecon: function() {
    return callDubboFun.bind(this)('IOtaBalanceAccountService', 'deleteOtaRecon', arguments);
  },
};
table['IOwnerHotelBillChinaService'] = {
  queryBillDetailPath: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillChinaService', 'queryBillDetailPath', arguments);
  },
  queryChinaHotelBillDetail: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillChinaService', 'queryChinaHotelBillDetail', arguments);
  },
  queryChinaHotelBillDetailList: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillChinaService', 'queryChinaHotelBillDetailList', arguments);
  },
  queryChinaHotelBillList: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillChinaService', 'queryChinaHotelBillList', arguments);
  },
};
table['IOwnerHotelBillInvoiceService'] = {
  queryHotelBillInvoice: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillInvoiceService', 'queryHotelBillInvoice', arguments);
  },
  hotelBillInvoice: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillInvoiceService', 'hotelBillInvoice', arguments);
  },
};
table['IOwnerHotelBillPayCoreService'] = {
  getPaySign: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillPayCoreService', 'getPaySign', arguments);
  },
  queryPayStatus: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillPayCoreService', 'queryPayStatus', arguments);
  },
};
table['IOwnerHotelBillPayService'] = {
  getSign: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillPayService', 'getSign', arguments);
  },
  queryPayStatus: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillPayService', 'queryPayStatus', arguments);
  },
  getSign1: function() {
    return callDubboFun.bind(this)('IOwnerHotelBillPayService', 'getSign1', arguments);
  },
};
table['IOwnerHotelMonthBillService'] = {
  queryHotelBillDateList: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryHotelBillDateList', arguments);
  },
  queryHotelBillPage: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryHotelBillPage', arguments);
  },
  queryNewHotelBill: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryNewHotelBill', arguments);
  },
  queryNewHotelsBillList: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryNewHotelsBillList', arguments);
  },
  queryHotelsBillist: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryHotelsBillist', arguments);
  },
  queryDetailPageList: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryDetailPageList', arguments);
  },
  queryNewHotelsBillCount: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryNewHotelsBillCount', arguments);
  },
  queryNoPayHotelsBillCount: function() {
    return callDubboFun.bind(this)('IOwnerHotelMonthBillService', 'queryNoPayHotelsBillCount', arguments);
  },
};
table['IOwnerHotelWeekBillService'] = {
  queryBillDetailPath: function() {
    return callDubboFun.bind(this)('IOwnerHotelWeekBillService', 'queryBillDetailPath', arguments);
  },
  queryHotelBillList: function() {
    return callDubboFun.bind(this)('IOwnerHotelWeekBillService', 'queryHotelBillList', arguments);
  },
  queryHotelBillProject: function() {
    return callDubboFun.bind(this)('IOwnerHotelWeekBillService', 'queryHotelBillProject', arguments);
  },
  queryWeekHotelBillDateList: function() {
    return callDubboFun.bind(this)('IOwnerHotelWeekBillService', 'queryWeekHotelBillDateList', arguments);
  },
  queryProjectDetailList: function() {
    return callDubboFun.bind(this)('IOwnerHotelWeekBillService', 'queryProjectDetailList', arguments);
  },
  queryBtachNo: function() {
    return callDubboFun.bind(this)('IOwnerHotelWeekBillService', 'queryBtachNo', arguments);
  },
};
table['IOwnerInfoRpcBizService'] = {
  getOwnerInfoByOyoId: function() {
    return callDubboFun.bind(this)('IOwnerInfoRpcBizService', 'getOwnerInfoByOyoId', arguments);
  },
};
table['IPayChannelQueryService'] = {
  payChannelList: function() {
    return callDubboFun.bind(this)('IPayChannelQueryService', 'payChannelList', arguments);
  },
};
table['ITimedTaskService'] = {
  updateTimedTask: function() {
    return callDubboFun.bind(this)('ITimedTaskService', 'updateTimedTask', arguments);
  },
  insertTimedTask: function() {
    return callDubboFun.bind(this)('ITimedTaskService', 'insertTimedTask', arguments);
  },
};
table['AggregationPermissionService'] = {
  queryStaffsByCodeAndDataIds: function() {
    return callDubboFun.bind(this)('AggregationPermissionService', 'queryStaffsByCodeAndDataIds', arguments);
  },
  getPermissionByUserIdAndCode: function() {
    return callDubboFun.bind(this)('AggregationPermissionService', 'getPermissionByUserIdAndCode', arguments);
  },
  hasCode: function() {
    return callDubboFun.bind(this)('AggregationPermissionService', 'hasCode', arguments);
  },
  hasFunctionPermissionCodeInApp: function() {
    return callDubboFun.bind(this)('AggregationPermissionService', 'hasFunctionPermissionCodeInApp', arguments);
  },
};
table['IPermissionService'] = {
  checkUserDataPermission: function() {
    return callDubboFun.bind(this)('IPermissionService', 'checkUserDataPermission', arguments);
  },
  getBasicDataPermission: function() {
    return callDubboFun.bind(this)('IPermissionService', 'getBasicDataPermission', arguments);
  },
  getUserDataPermission: function() {
    return callDubboFun.bind(this)('IPermissionService', 'getUserDataPermission', arguments);
  },
  getUserDataPermissionLowerNodeByParent: function() {
    return callDubboFun.bind(this)('IPermissionService', 'getUserDataPermissionLowerNodeByParent', arguments);
  },
};
table['ConsumableQueryFacadeService'] = {
  isOwnerQualified: function() {
    return callDubboFun.bind(this)('ConsumableQueryFacadeService', 'isOwnerQualified', arguments);
  },
  isOwnerInWhiteList: function() {
    return callDubboFun.bind(this)('ConsumableQueryFacadeService', 'isOwnerInWhiteList', arguments);
  },
  inventoryCalculation: function() {
    return callDubboFun.bind(this)('ConsumableQueryFacadeService', 'inventoryCalculation', arguments);
  },
  isInventoryWarning: function() {
    return callDubboFun.bind(this)('ConsumableQueryFacadeService', 'isInventoryWarning', arguments);
  },
};
table['HotelRevenueFacadeService'] = {
  queryTrendDataByHotelId: function() {
    return callDubboFun.bind(this)('HotelRevenueFacadeService', 'queryTrendDataByHotelId', arguments);
  },
  queryOperationData: function() {
    return callDubboFun.bind(this)('HotelRevenueFacadeService', 'queryOperationData', arguments);
  },
  queryStatisticsById: function() {
    return callDubboFun.bind(this)('HotelRevenueFacadeService', 'queryStatisticsById', arguments);
  },
  queryOperationData4OwnerV2: function() {
    return callDubboFun.bind(this)('HotelRevenueFacadeService', 'queryOperationData4OwnerV2', arguments);
  },
  queryOperationData4Owner: function() {
    return callDubboFun.bind(this)('HotelRevenueFacadeService', 'queryOperationData4Owner', arguments);
  },
};
table['HotelWeeklyReportFacadeService'] = {
  queryHotelIncomeUptonow: function() {
    return callDubboFun.bind(this)('HotelWeeklyReportFacadeService', 'queryHotelIncomeUptonow', arguments);
  },
  queryHotelOutgoUptonow: function() {
    return callDubboFun.bind(this)('HotelWeeklyReportFacadeService', 'queryHotelOutgoUptonow', arguments);
  },
  queryHotelIncomeByWeeks: function() {
    return callDubboFun.bind(this)('HotelWeeklyReportFacadeService', 'queryHotelIncomeByWeeks', arguments);
  },
  queryHotelAppraiseByWeeks: function() {
    return callDubboFun.bind(this)('HotelWeeklyReportFacadeService', 'queryHotelAppraiseByWeeks', arguments);
  },
};
table['NpsSurveyFacadeService'] = {
  npsQueryWithDate: function() {
    return callDubboFun.bind(this)('NpsSurveyFacadeService', 'npsQueryWithDate', arguments);
  },
};
table['PLBFacadeService'] = {
  queryPLBInfo: function() {
    return callDubboFun.bind(this)('PLBFacadeService', 'queryPLBInfo', arguments);
  },
};
table['InvoiceRpcBiz'] = {
  cancelInvoice: function() {
    return callDubboFun.bind(this)('InvoiceRpcBiz', 'cancelInvoice', arguments);
  },
  queryBuyer: function() {
    return callDubboFun.bind(this)('InvoiceRpcBiz', 'queryBuyer', arguments);
  },
  queryInvoice: function() {
    return callDubboFun.bind(this)('InvoiceRpcBiz', 'queryInvoice', arguments);
  },
  createInvoice: function() {
    return callDubboFun.bind(this)('InvoiceRpcBiz', 'createInvoice', arguments);
  },
};
table['TaskFeedBackService'] = {
  queryTaskFeedbackInfo: function() {
    return callDubboFun.bind(this)('TaskFeedBackService', 'queryTaskFeedbackInfo', arguments);
  },
};
table['TaskService'] = {
  getTaskProgressStatus: function() {
    return callDubboFun.bind(this)('TaskService', 'getTaskProgressStatus', arguments);
  },
  getWorkDetail: function() {
    return callDubboFun.bind(this)('TaskService', 'getWorkDetail', arguments);
  },
  saveWorkDetailAndFeedback: function() {
    return callDubboFun.bind(this)('TaskService', 'saveWorkDetailAndFeedback', arguments);
  },
};
table['AppVersionUpdateService'] = {
  getAppVersionUpdateInfo: function() {
    return callDubboFun.bind(this)('AppVersionUpdateService', 'getAppVersionUpdateInfo', arguments);
  },
};
table['CommonConstantApi'] = {
  queryConstantByKey: function() {
    return callDubboFun.bind(this)('CommonConstantApi', 'queryConstantByKey', arguments);
  },
  queryConstantByKeyV2: function() {
    return callDubboFun.bind(this)('CommonConstantApi', 'queryConstantByKeyV2', arguments);
  },
  insertConstant: function() {
    return callDubboFun.bind(this)('CommonConstantApi', 'insertConstant', arguments);
  },
};
table['CommonUserSettingService'] = {
  getSwitcher: function() {
    return callDubboFun.bind(this)('CommonUserSettingService', 'getSwitcher', arguments);
  },
  changeSwitcher: function() {
    return callDubboFun.bind(this)('CommonUserSettingService', 'changeSwitcher', arguments);
  },
  querySwitchTask: function() {
    return callDubboFun.bind(this)('CommonUserSettingService', 'querySwitchTask', arguments);
  },
};
table['OpsPositionApi'] = {
  findAllOpsPosition: function() {
    return callDubboFun.bind(this)('OpsPositionApi', 'findAllOpsPosition', arguments);
  },
};
table['RedisApi'] = {
  clearRedisByKey: function() {
    return callDubboFun.bind(this)('RedisApi', 'clearRedisByKey', arguments);
  },
};
table['ArticleService'] = {
  addArticle: function() {
    return callDubboFun.bind(this)('ArticleService', 'addArticle', arguments);
  },
  updateArticle: function() {
    return callDubboFun.bind(this)('ArticleService', 'updateArticle', arguments);
  },
  queryTop2ArticleInfo: function() {
    return callDubboFun.bind(this)('ArticleService', 'queryTop2ArticleInfo', arguments);
  },
  queryCmsArticleDetailInfo: function() {
    return callDubboFun.bind(this)('ArticleService', 'queryCmsArticleDetailInfo', arguments);
  },
  queryArticleList: function() {
    return callDubboFun.bind(this)('ArticleService', 'queryArticleList', arguments);
  },
  queryArticleDetailInfo: function() {
    return callDubboFun.bind(this)('ArticleService', 'queryArticleDetailInfo', arguments);
  },
  queryCmsArticleList: function() {
    return callDubboFun.bind(this)('ArticleService', 'queryCmsArticleList', arguments);
  },
  deleteArticle: function() {
    return callDubboFun.bind(this)('ArticleService', 'deleteArticle', arguments);
  },
};
table['BannerService'] = {
  updateBannerStatus: function() {
    return callDubboFun.bind(this)('BannerService', 'updateBannerStatus', arguments);
  },
  queryBannerDetailInfo: function() {
    return callDubboFun.bind(this)('BannerService', 'queryBannerDetailInfo', arguments);
  },
  addBannerInfo: function() {
    return callDubboFun.bind(this)('BannerService', 'addBannerInfo', arguments);
  },
  queryBannerInfoByPage: function() {
    return callDubboFun.bind(this)('BannerService', 'queryBannerInfoByPage', arguments);
  },
  queryCmsBannerDetailInfo: function() {
    return callDubboFun.bind(this)('BannerService', 'queryCmsBannerDetailInfo', arguments);
  },
  updateBannerInfo: function() {
    return callDubboFun.bind(this)('BannerService', 'updateBannerInfo', arguments);
  },
  queryBannerByLocation: function() {
    return callDubboFun.bind(this)('BannerService', 'queryBannerByLocation', arguments);
  },
};
table['BillPushApi'] = {
  billsIfNoRead: function() {
    return callDubboFun.bind(this)('BillPushApi', 'billsIfNoRead', arguments);
  },
  readBill: function() {
    return callDubboFun.bind(this)('BillPushApi', 'readBill', arguments);
  },
  hasNoReadBillType: function() {
    return callDubboFun.bind(this)('BillPushApi', 'hasNoReadBillType', arguments);
  },
};
table['ContentService'] = {
  addCancelFavorite: function() {
    return callDubboFun.bind(this)('ContentService', 'addCancelFavorite', arguments);
  },
};
table['HotelUpgradeApi'] = {
  subbmit: function() {
    return callDubboFun.bind(this)('HotelUpgradeApi', 'subbmit', arguments);
  },
};
table['ManagerService'] = {
  favoriteList: function() {
    return callDubboFun.bind(this)('ManagerService', 'favoriteList', arguments);
  },
  questionList: function() {
    return callDubboFun.bind(this)('ManagerService', 'questionList', arguments);
  },
};
table['MaterielApi'] = {
  applyListByPage: function() {
    return callDubboFun.bind(this)('MaterielApi', 'applyListByPage', arguments);
  },
  apply: function() {
    return callDubboFun.bind(this)('MaterielApi', 'apply', arguments);
  },
  batchNoIfApply: function() {
    return callDubboFun.bind(this)('MaterielApi', 'batchNoIfApply', arguments);
  },
};
table['NewsService'] = {
  queryAppNewsDetailInfo: function() {
    return callDubboFun.bind(this)('NewsService', 'queryAppNewsDetailInfo', arguments);
  },
  queryNewsList: function() {
    return callDubboFun.bind(this)('NewsService', 'queryNewsList', arguments);
  },
  queryTop5AllNewsInfo: function() {
    return callDubboFun.bind(this)('NewsService', 'queryTop5AllNewsInfo', arguments);
  },
  addNews: function() {
    return callDubboFun.bind(this)('NewsService', 'addNews', arguments);
  },
  deleteNews: function() {
    return callDubboFun.bind(this)('NewsService', 'deleteNews', arguments);
  },
  updateNews: function() {
    return callDubboFun.bind(this)('NewsService', 'updateNews', arguments);
  },
  queryCmsNewsDetailInfo: function() {
    return callDubboFun.bind(this)('NewsService', 'queryCmsNewsDetailInfo', arguments);
  },
  queryTopNewsInfo: function() {
    return callDubboFun.bind(this)('NewsService', 'queryTopNewsInfo', arguments);
  },
  queryTradeOrOyoNewsList: function() {
    return callDubboFun.bind(this)('NewsService', 'queryTradeOrOyoNewsList', arguments);
  },
};
table['NpsSurveyApi'] = {
  createNpsSurvey: function() {
    return callDubboFun.bind(this)('NpsSurveyApi', 'createNpsSurvey', arguments);
  },
  verifyCurrentNpsSurveySubmit: function() {
    return callDubboFun.bind(this)('NpsSurveyApi', 'verifyCurrentNpsSurveySubmit', arguments);
  },
};
table['OrderPushTimeApi'] = {
  updateOrderPushTime: function() {
    return callDubboFun.bind(this)('OrderPushTimeApi', 'updateOrderPushTime', arguments);
  },
  getByAccountId: function() {
    return callDubboFun.bind(this)('OrderPushTimeApi', 'getByAccountId', arguments);
  },
};
table['OyoShopApi'] = {
  getByHotelId: function() {
    return callDubboFun.bind(this)('OyoShopApi', 'getByHotelId', arguments);
  },
};
table['PerformanceLinkedBonusApi'] = {
  cancel: function() {
    return callDubboFun.bind(this)('PerformanceLinkedBonusApi', 'cancel', arguments);
  },
  hasOrder: function() {
    return callDubboFun.bind(this)('PerformanceLinkedBonusApi', 'hasOrder', arguments);
  },
  order: function() {
    return callDubboFun.bind(this)('PerformanceLinkedBonusApi', 'order', arguments);
  },
};
table['SalonQuestionService'] = {
  operationList: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'operationList', arguments);
  },
  updateReply: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'updateReply', arguments);
  },
  question: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'question', arguments);
  },
  delReply: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'delReply', arguments);
  },
  replyList: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'replyList', arguments);
  },
  detail: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'detail', arguments);
  },
  delQuestion: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'delQuestion', arguments);
  },
  list: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'list', arguments);
  },
  replyQuestion: function() {
    return callDubboFun.bind(this)('SalonQuestionService', 'replyQuestion', arguments);
  },
};
table['WeekReportApi'] = {
  weekReportDetail: function() {
    return callDubboFun.bind(this)('WeekReportApi', 'weekReportDetail', arguments);
  },
  countForUnRead: function() {
    return callDubboFun.bind(this)('WeekReportApi', 'countForUnRead', arguments);
  },
  weekReportBatchNoList: function() {
    return callDubboFun.bind(this)('WeekReportApi', 'weekReportBatchNoList', arguments);
  },
};
table['AmenityServiceClient'] = {
  hotelAll: function() {
    return callDubboFun.bind(this)('AmenityServiceClient', 'hotelAll', arguments);
  },
};
table['ApolloServiceClient'] = {
  roomStatus: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'roomStatus', arguments);
  },
  apolloDataRepair: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'apolloDataRepair', arguments);
  },
  apolloDirectHotelAutoActive: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'apolloDirectHotelAutoActive', arguments);
  },
  amenity: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'amenity', arguments);
  },
  searchHotelInfo: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'searchHotelInfo', arguments);
  },
  hotelImages: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'hotelImages', arguments);
  },
  newOyoId: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'newOyoId', arguments);
  },
  apolloHotelAutoActive: function() {
    return callDubboFun.bind(this)('ApolloServiceClient', 'apolloHotelAutoActive', arguments);
  },
};
table['BedServiceClient'] = {
  queryAllBedInfoList: function() {
    return callDubboFun.bind(this)('BedServiceClient', 'queryAllBedInfoList', arguments);
  },
};
table['ChannelServiceClient'] = {
  getServiceAmountParams: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'getServiceAmountParams', arguments);
  },
  hotelList: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'hotelList', arguments);
  },
  query: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'query', arguments);
  },
  getAllValidatedChannels: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'getAllValidatedChannels', arguments);
  },
  validChannelList: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'validChannelList', arguments);
  },
  hotelValidChannel: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'hotelValidChannel', arguments);
  },
  channelsInfo: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'channelsInfo', arguments);
  },
  channelList: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'channelList', arguments);
  },
  channelRateCodeInfo: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'channelRateCodeInfo', arguments);
  },
  channelNewOldMapping: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'channelNewOldMapping', arguments);
  },
  unbindingChannel: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'unbindingChannel', arguments);
  },
  crsChannelList: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'crsChannelList', arguments);
  },
  hotelCommission: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'hotelCommission', arguments);
  },
  allChannel: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'allChannel', arguments);
  },
  getHotelChannelStatus: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'getHotelChannelStatus', arguments);
  },
  commitChannel: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'commitChannel', arguments);
  },
  setCommission: function() {
    return callDubboFun.bind(this)('ChannelServiceClient', 'setCommission', arguments);
  },
};
table['CommonServiceClient'] = {
  zonesByIds: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'zonesByIds', arguments);
  },
  metadata: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'metadata', arguments);
  },
  zoneHubs: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'zoneHubs', arguments);
  },
  citiesByIds: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'citiesByIds', arguments);
  },
  cityClusters: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'cityClusters', arguments);
  },
  areaParentPath: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'areaParentPath', arguments);
  },
  salesArea: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'salesArea', arguments);
  },
  stateList: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'stateList', arguments);
  },
  cityList: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'cityList', arguments);
  },
  zones: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'zones', arguments);
  },
  batchAreaParentPath: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'batchAreaParentPath', arguments);
  },
  hubsByIds: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'hubsByIds', arguments);
  },
  hubCities: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'hubCities', arguments);
  },
  areaSearchHotel: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'areaSearchHotel', arguments);
  },
  stateCityList: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'stateCityList', arguments);
  },
  threeLinkage: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'threeLinkage', arguments);
  },
  clustersByIds: function() {
    return callDubboFun.bind(this)('CommonServiceClient', 'clustersByIds', arguments);
  },
};
table['HotelManageServiceClient'] = {
  getHotelRoomTypeUpdateLogs: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'getHotelRoomTypeUpdateLogs', arguments);
  },
  batchBindChannelAndRateCode: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'batchBindChannelAndRateCode', arguments);
  },
  getHotelChannelUpdateLogs: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'getHotelChannelUpdateLogs', arguments);
  },
  updateHotelRoomTypeStatus: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'updateHotelRoomTypeStatus', arguments);
  },
  getBatchImportLogs: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'getBatchImportLogs', arguments);
  },
  documentHandle: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'documentHandle', arguments);
  },
  documentDo: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'documentDo', arguments);
  },
  documentDownload: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'documentDownload', arguments);
  },
  documentQuery: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'documentQuery', arguments);
  },
  getHotelRoomTypeStatus: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'getHotelRoomTypeStatus', arguments);
  },
  getBatchHotelRoomTypeStatus: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'getBatchHotelRoomTypeStatus', arguments);
  },
  getHotelStatusChangedLogs: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'getHotelStatusChangedLogs', arguments);
  },
  documentDetail: function() {
    return callDubboFun.bind(this)('HotelManageServiceClient', 'documentDetail', arguments);
  },
};
table['HotelQueryServiceClient'] = {
  getHotelsByCondition: function() {
    return callDubboFun.bind(this)('HotelQueryServiceClient', 'getHotelsByCondition', arguments);
  },
};
table['HotelServiceClient'] = {
  hotelSearchByName: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelSearchByName', arguments);
  },
  isChina2: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'isChina2', arguments);
  },
  hotelBaseInfo: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelBaseInfo', arguments);
  },
  getHotelAndChannelByCityId: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelAndChannelByCityId', arguments);
  },
  findHotelsBaseInfoByIds: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'findHotelsBaseInfoByIds', arguments);
  },
  saveCommissionAndTime: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'saveCommissionAndTime', arguments);
  },
  goLiveHotel: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'goLiveHotel', arguments);
  },
  tpiCheckStatus: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'tpiCheckStatus', arguments);
  },
  liveCity: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'liveCity', arguments);
  },
  liveHotelSimpleInfo: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'liveHotelSimpleInfo', arguments);
  },
  channelList: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'channelList', arguments);
  },
  updateHotelStatusV1: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'updateHotelStatusV1', arguments);
  },
  listAllHotels: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'listAllHotels', arguments);
  },
  hotelListByOyoIdList: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelListByOyoIdList', arguments);
  },
  searchHotelByName: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'searchHotelByName', arguments);
  },
  crsGetHotelInfo: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'crsGetHotelInfo', arguments);
  },
  hotelBaseInfoV1: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelBaseInfoV1', arguments);
  },
  getReasontructureVO: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getReasontructureVO', arguments);
  },
  updateBizDateAndNightAuditTime: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'updateBizDateAndNightAuditTime', arguments);
  },
  getHotelRegion: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelRegion', arguments);
  },
  hotelDetail: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelDetail', arguments);
  },
  getHotelByLikeName: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelByLikeName', arguments);
  },
  cityIdHotels: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'cityIdHotels', arguments);
  },
  hotelStatusV1: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelStatusV1', arguments);
  },
  roomTypeListWithRateCode: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'roomTypeListWithRateCode', arguments);
  },
  idsHotels: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'idsHotels', arguments);
  },
  getRegion: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getRegion', arguments);
  },
  getHotelByTypeAndidList: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelByTypeAndidList', arguments);
  },
  channelHotels: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'channelHotels', arguments);
  },
  hotelSimpleInfoByHotelId: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelSimpleInfoByHotelId', arguments);
  },
  conditionsQueryHotel: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'conditionsQueryHotel', arguments);
  },
  hotelSimpleInfoByOyoId: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelSimpleInfoByOyoId', arguments);
  },
  hotelInfoListByOyoIdList: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelInfoListByOyoIdList', arguments);
  },
  getHotelAndCityPageInfo: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelAndCityPageInfo', arguments);
  },
  updateHotelStatus: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'updateHotelStatus', arguments);
  },
  batchUpdateHotelStatus: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'batchUpdateHotelStatus', arguments);
  },
  hotelIsLived: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelIsLived', arguments);
  },
  hotelTag: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelTag', arguments);
  },
  hotelAddress: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelAddress', arguments);
  },
  idsHotelsWithDetailCity: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'idsHotelsWithDetailCity', arguments);
  },
  countAllHotel: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'countAllHotel', arguments);
  },
  getHotelStatus: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelStatus', arguments);
  },
  getHotelbyIdListAndName: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelbyIdListAndName', arguments);
  },
  transHotelIdAndUnique: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'transHotelIdAndUnique', arguments);
  },
  syncHotel: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'syncHotel', arguments);
  },
  getHotelTypeBrandType: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelTypeBrandType', arguments);
  },
  getHotelBaseInfo: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelBaseInfo', arguments);
  },
  getHotel: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotel', arguments);
  },
  getAllHotelSimpleInfo: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getAllHotelSimpleInfo', arguments);
  },
  hotelRoomTypeChannelRateCode: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'hotelRoomTypeChannelRateCode', arguments);
  },
  pageGetAllHotel: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'pageGetAllHotel', arguments);
  },
  searchHotel: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'searchHotel', arguments);
  },
  getAllOyoRoomType: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getAllOyoRoomType', arguments);
  },
  getHotelType: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelType', arguments);
  },
  getHotelHistoryStatus: function() {
    return callDubboFun.bind(this)('HotelServiceClient', 'getHotelHistoryStatus', arguments);
  },
};
table['ImageServiceClient'] = {
  removeImage: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'removeImage', arguments);
  },
  getHotelRoomImage: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'getHotelRoomImage', arguments);
  },
  getHotelImageCategoryList: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'getHotelImageCategoryList', arguments);
  },
  changeCategory: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'changeCategory', arguments);
  },
  getHotelIndexImage: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'getHotelIndexImage', arguments);
  },
  changePriority: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'changePriority', arguments);
  },
  getHotelImageTypeList: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'getHotelImageTypeList', arguments);
  },
  uploadImagePSAComplete: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'uploadImagePSAComplete', arguments);
  },
  getHotelImageFullInfo: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'getHotelImageFullInfo', arguments);
  },
  uploadHotelImage: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'uploadHotelImage', arguments);
  },
  getHotelImage: function() {
    return callDubboFun.bind(this)('ImageServiceClient', 'getHotelImage', arguments);
  },
};
table['ImageZipServiceClient'] = {
  initData: function() {
    return callDubboFun.bind(this)('ImageZipServiceClient', 'initData', arguments);
  },
  sendMail: function() {
    return callDubboFun.bind(this)('ImageZipServiceClient', 'sendMail', arguments);
  },
  downLoadImage: function() {
    return callDubboFun.bind(this)('ImageZipServiceClient', 'downLoadImage', arguments);
  },
};
table['ListRateServiceClient'] = {
  getListRateByHotelId: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'getListRateByHotelId', arguments);
  },
  getListRateByOneDay: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'getListRateByOneDay', arguments);
  },
  getPresetRate: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'getPresetRate', arguments);
  },
  getChannelListRateByMonth: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'getChannelListRateByMonth', arguments);
  },
  getChannelListRateByOneDay: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'getChannelListRateByOneDay', arguments);
  },
  checkListRate: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'checkListRate', arguments);
  },
  updateListRate: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'updateListRate', arguments);
  },
  presetRate: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'presetRate', arguments);
  },
  updateListRateByWeek: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'updateListRateByWeek', arguments);
  },
  getListRateByMonth: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'getListRateByMonth', arguments);
  },
  updateListRateByDate: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'updateListRateByDate', arguments);
  },
  getListRateByHotelIdList: function() {
    return callDubboFun.bind(this)('ListRateServiceClient', 'getListRateByHotelIdList', arguments);
  },
};
table['LocationServiceClient'] = {
  getParentLocation: function() {
    return callDubboFun.bind(this)('LocationServiceClient', 'getParentLocation', arguments);
  },
  getClusterByCityId: function() {
    return callDubboFun.bind(this)('LocationServiceClient', 'getClusterByCityId', arguments);
  },
  getStreetInfo: function() {
    return callDubboFun.bind(this)('LocationServiceClient', 'getStreetInfo', arguments);
  },
};
table['OtaServiceClient'] = {
  getTotalChargeByDaily: function() {
    return callDubboFun.bind(this)('OtaServiceClient', 'getTotalChargeByDaily', arguments);
  },
  products: function() {
    return callDubboFun.bind(this)('OtaServiceClient', 'products', arguments);
  },
};
table['ProductServiceClient'] = {
  searchRateCodeNameList: function() {
    return callDubboFun.bind(this)('ProductServiceClient', 'searchRateCodeNameList', arguments);
  },
  products: function() {
    return callDubboFun.bind(this)('ProductServiceClient', 'products', arguments);
  },
};
table['RoomServiceClient'] = {
  getFloorAndRoomNum: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getFloorAndRoomNum', arguments);
  },
  getRoomListByHotelAndRoomType: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getRoomListByHotelAndRoomType', arguments);
  },
  searchRoom: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'searchRoom', arguments);
  },
  getSaleableRoomCount: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getSaleableRoomCount', arguments);
  },
  exchangeRoom: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'exchangeRoom', arguments);
  },
  getRoomNameByHotelIdAndOrderId: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getRoomNameByHotelIdAndOrderId', arguments);
  },
  getRoomsByHotelId: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getRoomsByHotelId', arguments);
  },
  getRoomStatusList: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getRoomStatusList', arguments);
  },
  deleteRoom: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'deleteRoom', arguments);
  },
  batchUpdateRoomStatus: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'batchUpdateRoomStatus', arguments);
  },
  getRoomWithRoomTypeByHotelId: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getRoomWithRoomTypeByHotelId', arguments);
  },
  searchRoomStatus: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'searchRoomStatus', arguments);
  },
  getRoomTypeAndFloor: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getRoomTypeAndFloor', arguments);
  },
  getRoom: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getRoom', arguments);
  },
  saveRoomListByHotelAndRoomType: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'saveRoomListByHotelAndRoomType', arguments);
  },
  addRoom: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'addRoom', arguments);
  },
  getFloors: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getFloors', arguments);
  },
  updateStatus: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'updateStatus', arguments);
  },
  inventoryHandle: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'inventoryHandle', arguments);
  },
  getCleanRoom: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getCleanRoom', arguments);
  },
  stopSellRoom: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'stopSellRoom', arguments);
  },
  getTotalAndStayingRoomsByHotelId: function() {
    return callDubboFun.bind(this)('RoomServiceClient', 'getTotalAndStayingRoomsByHotelId', arguments);
  },
};
table['RoomTypeServiceClient'] = {
  getSellRoomTypeList: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getSellRoomTypeList', arguments);
  },
  saveRoomTypeBindList: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'saveRoomTypeBindList', arguments);
  },
  getRoomTypeInfoByHotelId: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeInfoByHotelId', arguments);
  },
  saveRoomTypeInfo: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'saveRoomTypeInfo', arguments);
  },
  checkHotelRoomType: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'checkHotelRoomType', arguments);
  },
  getRoomTypeByIds: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeByIds', arguments);
  },
  saveHotelBindRoomTypeList: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'saveHotelBindRoomTypeList', arguments);
  },
  rateCodeList: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'rateCodeList', arguments);
  },
  getRoomTypeList: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeList', arguments);
  },
  deleteHotelBindRoomType: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'deleteHotelBindRoomType', arguments);
  },
  batchRoomTypeBindRateByHotel: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'batchRoomTypeBindRateByHotel', arguments);
  },
  getAllRoomTypeAndRelation: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getAllRoomTypeAndRelation', arguments);
  },
  batchRoomTypeBindRateByHotelId: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'batchRoomTypeBindRateByHotelId', arguments);
  },
  getRoomTypeWithSaleInfo: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeWithSaleInfo', arguments);
  },
  getRoomStatusByHotelIds: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomStatusByHotelIds', arguments);
  },
  getAvailRoomType: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getAvailRoomType', arguments);
  },
  getHotelRoomStatus: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getHotelRoomStatus', arguments);
  },
  getRoomTypeBindInfoList: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeBindInfoList', arguments);
  },
  roomTypeBindRateCodes: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'roomTypeBindRateCodes', arguments);
  },
  getRoomTypeById: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeById', arguments);
  },
  batchRoomTypeBindRateCodes: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'batchRoomTypeBindRateCodes', arguments);
  },
  getRoomTypeByCode: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeByCode', arguments);
  },
  channelNewOldMapping: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'channelNewOldMapping', arguments);
  },
  getRoomTypeBindList: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getRoomTypeBindList', arguments);
  },
  getHotelRooms: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getHotelRooms', arguments);
  },
  getAllOyoRoomType: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'getAllOyoRoomType', arguments);
  },
  deleteRoomTypeBedInfo: function() {
    return callDubboFun.bind(this)('RoomTypeServiceClient', 'deleteRoomTypeBedInfo', arguments);
  },
};
table['TemporaryServiceClient'] = {
  batchRoomTypeBindRateCodes: function() {
    return callDubboFun.bind(this)('TemporaryServiceClient', 'batchRoomTypeBindRateCodes', arguments);
  },
  rollbackChunleiActivity: function() {
    return callDubboFun.bind(this)('TemporaryServiceClient', 'rollbackChunleiActivity', arguments);
  },
};
table['CommonService'] = {
  searchHotel: function() {
    return callDubboFun.bind(this)('CommonService', 'searchHotel', arguments);
  },
  areaSearch: function() {
    return callDubboFun.bind(this)('CommonService', 'areaSearch', arguments);
  },
  listZoneByCooperationType: function() {
    return callDubboFun.bind(this)('CommonService', 'listZoneByCooperationType', arguments);
  },
};
table['AppealRpcService'] = {
  getAppealList: function() {
    return callDubboFun.bind(this)('AppealRpcService', 'getAppealList', arguments);
  },
};
table['HandoverRpcService'] = {
  findHotelHandoverList: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'findHotelHandoverList', arguments);
  },
  getHandover: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'getHandover', arguments);
  },
  getPreHandover: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'getPreHandover', arguments);
  },
  findCurHandoverDetailByHotelId: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'findCurHandoverDetailByHotelId', arguments);
  },
  findHandoverDetailById: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'findHandoverDetailById', arguments);
  },
  addHandover: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'addHandover', arguments);
  },
  getLastReserveFundAmount: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'getLastReserveFundAmount', arguments);
  },
  getPostingDetail: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'getPostingDetail', arguments);
  },
  adjustReserveFund: function() {
    return callDubboFun.bind(this)('HandoverRpcService', 'adjustReserveFund', arguments);
  },
};
table['HmiRpcService'] = {
  queryHmiContent: function() {
    return callDubboFun.bind(this)('HmiRpcService', 'queryHmiContent', arguments);
  },
};
table['KryComplianceRpcService'] = {
  getComplianceLevel: function() {
    return callDubboFun.bind(this)('KryComplianceRpcService', 'getComplianceLevel', arguments);
  },
  getOtaAccountCheckDetail: function() {
    return callDubboFun.bind(this)('KryComplianceRpcService', 'getOtaAccountCheckDetail', arguments);
  },
  getOtherOperateDetail: function() {
    return callDubboFun.bind(this)('KryComplianceRpcService', 'getOtherOperateDetail', arguments);
  },
  getNonComplianceCount: function() {
    return callDubboFun.bind(this)('KryComplianceRpcService', 'getNonComplianceCount', arguments);
  },
  getCustomer3CExpDetail: function() {
    return callDubboFun.bind(this)('KryComplianceRpcService', 'getCustomer3CExpDetail', arguments);
  },
  getYesterdayAllNoncomplianceRecord: function() {
    return callDubboFun.bind(this)('KryComplianceRpcService', 'getYesterdayAllNoncomplianceRecord', arguments);
  },
};
table['ReportRpcService'] = {
  queryOrderSourceDetail: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryOrderSourceDetail', arguments);
  },
  findNewBizRevenueReportOfDate: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findNewBizRevenueReportOfDate', arguments);
  },
  queryOrderSourceReport: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryOrderSourceReport', arguments);
  },
  queryCouponTransformeRateReport: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryCouponTransformeRateReport', arguments);
  },
  queryMonthReport: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryMonthReport', arguments);
  },
  findNewBizRevenueReportOfYear: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findNewBizRevenueReportOfYear', arguments);
  },
  queryRevenueRoomNightsDetail: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryRevenueRoomNightsDetail', arguments);
  },
  findExtBookingPosting: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findExtBookingPosting', arguments);
  },
  queryHotelRoomTypeReport: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryHotelRoomTypeReport', arguments);
  },
  queryCouponReport: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryCouponReport', arguments);
  },
  queryRevenueRoomNightsFeeDetail: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryRevenueRoomNightsFeeDetail', arguments);
  },
  getAllOperatorsInHotel: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'getAllOperatorsInHotel', arguments);
  },
  findBizRevenueReportOfDate: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findBizRevenueReportOfDate', arguments);
  },
  findExtBookingPostingDetail: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findExtBookingPostingDetail', arguments);
  },
  findHotelIncomeReport: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findHotelIncomeReport', arguments);
  },
  findBizRevenueReportOfYear: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findBizRevenueReportOfYear', arguments);
  },
  exportExtBookingPosting: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'exportExtBookingPosting', arguments);
  },
  queryMemberRate: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'queryMemberRate', arguments);
  },
  findBizRevenueReportList: function() {
    return callDubboFun.bind(this)('ReportRpcService', 'findBizRevenueReportList', arguments);
  },
};
table['RoomReservationRpcService'] = {
  getRoomReservationListWithGuestPhone: function() {
    return callDubboFun.bind(this)('RoomReservationRpcService', 'getRoomReservationListWithGuestPhone', arguments);
  },
};
table['WarningRpcService'] = {
  ccc: function() {
    return callDubboFun.bind(this)('WarningRpcService', 'ccc', arguments);
  },
  other: function() {
    return callDubboFun.bind(this)('WarningRpcService', 'other', arguments);
  },
  otaAccountCheck: function() {
    return callDubboFun.bind(this)('WarningRpcService', 'otaAccountCheck', arguments);
  },
  compositeOperateLevel: function() {
    return callDubboFun.bind(this)('WarningRpcService', 'compositeOperateLevel', arguments);
  },
};
table['CityPoiRemoteService'] = {
  cityPoi: function() {
    return callDubboFun.bind(this)('CityPoiRemoteService', 'cityPoi', arguments);
  },
};
table['CityRemoteService'] = {
  getHotelCityList: function() {
    return callDubboFun.bind(this)('CityRemoteService', 'getHotelCityList', arguments);
  },
  getHotCities: function() {
    return callDubboFun.bind(this)('CityRemoteService', 'getHotCities', arguments);
  },
  getHotDestinations: function() {
    return callDubboFun.bind(this)('CityRemoteService', 'getHotDestinations', arguments);
  },
  getCities: function() {
    return callDubboFun.bind(this)('CityRemoteService', 'getCities', arguments);
  },
};
table['FuzzySearchRemoteService'] = {
  getHotelCityInfo: function() {
    return callDubboFun.bind(this)('FuzzySearchRemoteService', 'getHotelCityInfo', arguments);
  },
  getFuzzySearchForConsumer: function() {
    return callDubboFun.bind(this)('FuzzySearchRemoteService', 'getFuzzySearchForConsumer', arguments);
  },
  getFuzzySearch: function() {
    return callDubboFun.bind(this)('FuzzySearchRemoteService', 'getFuzzySearch', arguments);
  },
  searchPoi: function() {
    return callDubboFun.bind(this)('FuzzySearchRemoteService', 'searchPoi', arguments);
  },
};
table['HotelListRemoteService'] = {
  getConsumerHourlyRooms: function() {
    return callDubboFun.bind(this)('HotelListRemoteService', 'getConsumerHourlyRooms', arguments);
  },
};
table['HotelMinPriceRemoteService'] = {
  bulkObtainHotelMinPrice: function() {
    return callDubboFun.bind(this)('HotelMinPriceRemoteService', 'bulkObtainHotelMinPrice', arguments);
  },
};
table['HotelWifiRemoteService'] = {
  hotelWifiSearch: function() {
    return callDubboFun.bind(this)('HotelWifiRemoteService', 'hotelWifiSearch', arguments);
  },
};
table['RecommendHotelsRemoteService'] = {
  recommendHotels: function() {
    return callDubboFun.bind(this)('RecommendHotelsRemoteService', 'recommendHotels', arguments);
  },
  nearbyHotel: function() {
    return callDubboFun.bind(this)('RecommendHotelsRemoteService', 'nearbyHotel', arguments);
  },
};
table['SearchCommentRemoteService'] = {
  getCommentList: function() {
    return callDubboFun.bind(this)('SearchCommentRemoteService', 'getCommentList', arguments);
  },
};
table['SearchHotelsRemoteService'] = {
  getHotelLocationDistance: function() {
    return callDubboFun.bind(this)('SearchHotelsRemoteService', 'getHotelLocationDistance', arguments);
  },
  getConsumerHotels: function() {
    return callDubboFun.bind(this)('SearchHotelsRemoteService', 'getConsumerHotels', arguments);
  },
  hotelSearch: function() {
    return callDubboFun.bind(this)('SearchHotelsRemoteService', 'hotelSearch', arguments);
  },
  getBusinessHotels: function() {
    return callDubboFun.bind(this)('SearchHotelsRemoteService', 'getBusinessHotels', arguments);
  },
  hotelInfoSearch: function() {
    return callDubboFun.bind(this)('SearchHotelsRemoteService', 'hotelInfoSearch', arguments);
  },
  retrievePoiOptions: function() {
    return callDubboFun.bind(this)('SearchHotelsRemoteService', 'retrievePoiOptions', arguments);
  },
  filterOptions: function() {
    return callDubboFun.bind(this)('SearchHotelsRemoteService', 'filterOptions', arguments);
  },
};
table['SimpleDslSearchService'] = {
  dslQueryCity: function() {
    return callDubboFun.bind(this)('SimpleDslSearchService', 'dslQueryCity', arguments);
  },
  dslQueryHotel: function() {
    return callDubboFun.bind(this)('SimpleDslSearchService', 'dslQueryHotel', arguments);
  },
  dslQueryPoi: function() {
    return callDubboFun.bind(this)('SimpleDslSearchService', 'dslQueryPoi', arguments);
  },
};
table['SimpleHotelSearchService'] = {
  dslQuery: function() {
    return callDubboFun.bind(this)('SimpleHotelSearchService', 'dslQuery', arguments);
  },
};
table['ComplianceFacade'] = {
  queryOwnerIdeInstallIntention: function() {
    return callDubboFun.bind(this)('ComplianceFacade', 'queryOwnerIdeInstallIntention', arguments);
  },
  queryIdeInstallStatus: function() {
    return callDubboFun.bind(this)('ComplianceFacade', 'queryIdeInstallStatus', arguments);
  },
  queryHotelOtaAccountCompliance: function() {
    return callDubboFun.bind(this)('ComplianceFacade', 'queryHotelOtaAccountCompliance', arguments);
  },
  queryHotelIncomeLossCompliance: function() {
    return callDubboFun.bind(this)('ComplianceFacade', 'queryHotelIncomeLossCompliance', arguments);
  },
  queryHotelCidCompliance: function() {
    return callDubboFun.bind(this)('ComplianceFacade', 'queryHotelCidCompliance', arguments);
  },
  queryHotelOpData: function() {
    return callDubboFun.bind(this)('ComplianceFacade', 'queryHotelOpData', arguments);
  },
  batchQueryHotelOpData: function() {
    return callDubboFun.bind(this)('ComplianceFacade', 'batchQueryHotelOpData', arguments);
  },
};
table['DubboDemoFacade'] = {
  demo: function() {
    return callDubboFun.bind(this)('DubboDemoFacade', 'demo', arguments);
  },
  demo1: function() {
    return callDubboFun.bind(this)('DubboDemoFacade', 'demo1', arguments);
  },
};
table['PlaceExposureService'] = {
  searchCyclePlace: function() {
    return callDubboFun.bind(this)('PlaceExposureService', 'searchCyclePlace', arguments);
  },
  searchHotel: function() {
    return callDubboFun.bind(this)('PlaceExposureService', 'searchHotel', arguments);
  },
  searchPlace: function() {
    return callDubboFun.bind(this)('PlaceExposureService', 'searchPlace', arguments);
  },
  batchSearchHotel: function() {
    return callDubboFun.bind(this)('PlaceExposureService', 'batchSearchHotel', arguments);
  },
  searchOtaPlace: function() {
    return callDubboFun.bind(this)('PlaceExposureService', 'searchOtaPlace', arguments);
  },
};
table['MessageService'] = {
  queryByStatus: function() {
    return callDubboFun.bind(this)('MessageService', 'queryByStatus', arguments);
  },
  queryByTagAndInstanceId: function() {
    return callDubboFun.bind(this)('MessageService', 'queryByTagAndInstanceId', arguments);
  },
  queryByMessageId: function() {
    return callDubboFun.bind(this)('MessageService', 'queryByMessageId', arguments);
  },
  updateMessageMessageId: function() {
    return callDubboFun.bind(this)('MessageService', 'updateMessageMessageId', arguments);
  },
  updateMessage: function() {
    return callDubboFun.bind(this)('MessageService', 'updateMessage', arguments);
  },
  saveMessage: function() {
    return callDubboFun.bind(this)('MessageService', 'saveMessage', arguments);
  },
};
table['PlaceActiveService'] = {
  contractSigned: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'contractSigned', arguments);
  },
  bindLandmark: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'bindLandmark', arguments);
  },
  appoloHotelAmenityActive: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'appoloHotelAmenityActive', arguments);
  },
  updateHotelStatus: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'updateHotelStatus', arguments);
  },
  savePlaceTag: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'savePlaceTag', arguments);
  },
  updatePTIStatus: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'updatePTIStatus', arguments);
  },
  saleBlackRoomChangeRoomType: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'saleBlackRoomChangeRoomType', arguments);
  },
  bindChannel: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'bindChannel', arguments);
  },
  apolloHotelImages: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'apolloHotelImages', arguments);
  },
  appoloHotelActive: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'appoloHotelActive', arguments);
  },
  appoloRoomActive: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'appoloRoomActive', arguments);
  },
  apolloHotelPriceActive: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'apolloHotelPriceActive', arguments);
  },
  hotelImages: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'hotelImages', arguments);
  },
  apolloRoomFix: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'apolloRoomFix', arguments);
  },
  setRateList: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'setRateList', arguments);
  },
  bindContact: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'bindContact', arguments);
  },
  recoup: function() {
    return callDubboFun.bind(this)('PlaceActiveService', 'recoup', arguments);
  },
};
table['PlaceActiveV2Service'] = {
  apolloPaf: function() {
    return callDubboFun.bind(this)('PlaceActiveV2Service', 'apolloPaf', arguments);
  },
  apolloLive: function() {
    return callDubboFun.bind(this)('PlaceActiveV2Service', 'apolloLive', arguments);
  },
  apolloPsa: function() {
    return callDubboFun.bind(this)('PlaceActiveV2Service', 'apolloPsa', arguments);
  },
};
table['PlaceHistoryService'] = {
  getPlaceHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getPlaceHistory', arguments);
  },
  getSpaceTypeHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getSpaceTypeHistory', arguments);
  },
  getContactHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getContactHistory', arguments);
  },
  getFloorSpaceHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getFloorSpaceHistory', arguments);
  },
  getPlacePayTypeHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getPlacePayTypeHistory', arguments);
  },
  getPlacePoiHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getPlacePoiHistory', arguments);
  },
  getPlaceOtaAccountRelaHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getPlaceOtaAccountRelaHistory', arguments);
  },
  getPlaceAttributesHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getPlaceAttributesHistory', arguments);
  },
  getLegalEntityHistory: function() {
    return callDubboFun.bind(this)('PlaceHistoryService', 'getLegalEntityHistory', arguments);
  },
};
table['PlaceLeadsService'] = {
  getRepeatPlace: function() {
    return callDubboFun.bind(this)('PlaceLeadsService', 'getRepeatPlace', arguments);
  },
  savePlace: function() {
    return callDubboFun.bind(this)('PlaceLeadsService', 'savePlace', arguments);
  },
  getPlace: function() {
    return callDubboFun.bind(this)('PlaceLeadsService', 'getPlace', arguments);
  },
  savePlaceOtaAccountRela: function() {
    return callDubboFun.bind(this)('PlaceLeadsService', 'savePlaceOtaAccountRela', arguments);
  },
};
table['PlaceService'] = {
  saveContact: function() {
    return callDubboFun.bind(this)('PlaceService', 'saveContact', arguments);
  },
  createSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'createSpace', arguments);
  },
  updateImage: function() {
    return callDubboFun.bind(this)('PlaceService', 'updateImage', arguments);
  },
  getPlaceAttributes: function() {
    return callDubboFun.bind(this)('PlaceService', 'getPlaceAttributes', arguments);
  },
  searchSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'searchSpace', arguments);
  },
  getLegalEntity: function() {
    return callDubboFun.bind(this)('PlaceService', 'getLegalEntity', arguments);
  },
  getAllFloorSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'getAllFloorSpace', arguments);
  },
  savePlacePoi: function() {
    return callDubboFun.bind(this)('PlaceService', 'savePlacePoi', arguments);
  },
  setDefaultContact: function() {
    return callDubboFun.bind(this)('PlaceService', 'setDefaultContact', arguments);
  },
  create: function() {
    return callDubboFun.bind(this)('PlaceService', 'create', arguments);
  },
  deleteImage: function() {
    return callDubboFun.bind(this)('PlaceService', 'deleteImage', arguments);
  },
  createContact: function() {
    return callDubboFun.bind(this)('PlaceService', 'createContact', arguments);
  },
  updateSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'updateSpace', arguments);
  },
  getRoomInfoByHotelIds: function() {
    return callDubboFun.bind(this)('PlaceService', 'getRoomInfoByHotelIds', arguments);
  },
  getPlacePoi: function() {
    return callDubboFun.bind(this)('PlaceService', 'getPlacePoi', arguments);
  },
  saveImage: function() {
    return callDubboFun.bind(this)('PlaceService', 'saveImage', arguments);
  },
  getSpaceTypeAttribute: function() {
    return callDubboFun.bind(this)('PlaceService', 'getSpaceTypeAttribute', arguments);
  },
  setPlacePayType: function() {
    return callDubboFun.bind(this)('PlaceService', 'setPlacePayType', arguments);
  },
  addImage: function() {
    return callDubboFun.bind(this)('PlaceService', 'addImage', arguments);
  },
  deletePlaceOtaAccountRela: function() {
    return callDubboFun.bind(this)('PlaceService', 'deletePlaceOtaAccountRela', arguments);
  },
  getSpaceAttribute: function() {
    return callDubboFun.bind(this)('PlaceService', 'getSpaceAttribute', arguments);
  },
  getPlaceByCode: function() {
    return callDubboFun.bind(this)('PlaceService', 'getPlaceByCode', arguments);
  },
  saveSpaceTypeAttribute: function() {
    return callDubboFun.bind(this)('PlaceService', 'saveSpaceTypeAttribute', arguments);
  },
  createForResign: function() {
    return callDubboFun.bind(this)('PlaceService', 'createForResign', arguments);
  },
  getSpaceType: function() {
    return callDubboFun.bind(this)('PlaceService', 'getSpaceType', arguments);
  },
  searchPlace: function() {
    return callDubboFun.bind(this)('PlaceService', 'searchPlace', arguments);
  },
  savePlaceOtaAccountRela: function() {
    return callDubboFun.bind(this)('PlaceService', 'savePlaceOtaAccountRela', arguments);
  },
  getImage: function() {
    return callDubboFun.bind(this)('PlaceService', 'getImage', arguments);
  },
  migrate: function() {
    return callDubboFun.bind(this)('PlaceService', 'migrate', arguments);
  },
  batchGetPlaceByCodes: function() {
    return callDubboFun.bind(this)('PlaceService', 'batchGetPlaceByCodes', arguments);
  },
  getAllPlaceAttributeStats: function() {
    return callDubboFun.bind(this)('PlaceService', 'getAllPlaceAttributeStats', arguments);
  },
  updatePlace: function() {
    return callDubboFun.bind(this)('PlaceService', 'updatePlace', arguments);
  },
  getPlaceAttributeStats: function() {
    return callDubboFun.bind(this)('PlaceService', 'getPlaceAttributeStats', arguments);
  },
  batchGetPlaceByIds: function() {
    return callDubboFun.bind(this)('PlaceService', 'batchGetPlaceByIds', arguments);
  },
  saveLegalEntity: function() {
    return callDubboFun.bind(this)('PlaceService', 'saveLegalEntity', arguments);
  },
  getBaseAttribute: function() {
    return callDubboFun.bind(this)('PlaceService', 'getBaseAttribute', arguments);
  },
  savePlaceAttributes: function() {
    return callDubboFun.bind(this)('PlaceService', 'savePlaceAttributes', arguments);
  },
  getPlacePayType: function() {
    return callDubboFun.bind(this)('PlaceService', 'getPlacePayType', arguments);
  },
  deleteSpaceRela: function() {
    return callDubboFun.bind(this)('PlaceService', 'deleteSpaceRela', arguments);
  },
  createImage: function() {
    return callDubboFun.bind(this)('PlaceService', 'createImage', arguments);
  },
  batchGetSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'batchGetSpace', arguments);
  },
  deleteSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'deleteSpace', arguments);
  },
  getContact: function() {
    return callDubboFun.bind(this)('PlaceService', 'getContact', arguments);
  },
  getPlaceOtaAccountRela: function() {
    return callDubboFun.bind(this)('PlaceService', 'getPlaceOtaAccountRela', arguments);
  },
  saveSpaceAttribute: function() {
    return callDubboFun.bind(this)('PlaceService', 'saveSpaceAttribute', arguments);
  },
  updatePlaceStatus: function() {
    return callDubboFun.bind(this)('PlaceService', 'updatePlaceStatus', arguments);
  },
  getSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'getSpace', arguments);
  },
  getFloorSpace: function() {
    return callDubboFun.bind(this)('PlaceService', 'getFloorSpace', arguments);
  },
  getOyoId: function() {
    return callDubboFun.bind(this)('PlaceService', 'getOyoId', arguments);
  },
  getPlaceById: function() {
    return callDubboFun.bind(this)('PlaceService', 'getPlaceById', arguments);
  },
};
table['IAccountInfoService'] = {
  saveSubmittedInfo: function() {
    return callDubboFun.bind(this)('IAccountInfoService', 'saveSubmittedInfo', arguments);
  },
  editAccount: function() {
    return callDubboFun.bind(this)('IAccountInfoService', 'editAccount', arguments);
  },
  query: function() {
    return callDubboFun.bind(this)('IAccountInfoService', 'query', arguments);
  },
  batchUpdateAuditStatus: function() {
    return callDubboFun.bind(this)('IAccountInfoService', 'batchUpdateAuditStatus', arguments);
  },
  createAccount: function() {
    return callDubboFun.bind(this)('IAccountInfoService', 'createAccount', arguments);
  },
  delete: function() {
    return callDubboFun.bind(this)('IAccountInfoService', 'delete', arguments);
  },
};
table['IAccountLifeCycleService'] = {
  updateAccountByBasic: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'updateAccountByBasic', arguments);
  },
  getVerificationCode: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'getVerificationCode', arguments);
  },
  resetPassword: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'resetPassword', arguments);
  },
  logout: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'logout', arguments);
  },
  refreshTicket: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'refreshTicket', arguments);
  },
  verify: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'verify', arguments);
  },
  login: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'login', arguments);
  },
  verifyTicket: function() {
    return callDubboFun.bind(this)('IAccountLifeCycleService', 'verifyTicket', arguments);
  },
};
table['IAccountQueryService'] = {
  getLeaderByAccountId: function() {
    return callDubboFun.bind(this)('IAccountQueryService', 'getLeaderByAccountId', arguments);
  },
  getLowerByAccountId: function() {
    return callDubboFun.bind(this)('IAccountQueryService', 'getLowerByAccountId', arguments);
  },
  getAccountsByBatch: function() {
    return callDubboFun.bind(this)('IAccountQueryService', 'getAccountsByBatch', arguments);
  },
  getAccountsByCondition: function() {
    return callDubboFun.bind(this)('IAccountQueryService', 'getAccountsByCondition', arguments);
  },
  getAccountsByUserCodesBatch: function() {
    return callDubboFun.bind(this)('IAccountQueryService', 'getAccountsByUserCodesBatch', arguments);
  },
  getAccountByBasic: function() {
    return callDubboFun.bind(this)('IAccountQueryService', 'getAccountByBasic', arguments);
  },
};
table['IBusinessBridgeService'] = {
  relationMapConvert: function() {
    return callDubboFun.bind(this)('IBusinessBridgeService', 'relationMapConvert', arguments);
  },
};
table['IDataPermissionService'] = {
  getDataPermissionRelationByCondition: function() {
    return callDubboFun.bind(this)('IDataPermissionService', 'getDataPermissionRelationByCondition', arguments);
  },
  getAccountRelationDataPermissionByCondition: function() {
    return callDubboFun.bind(this)('IDataPermissionService', 'getAccountRelationDataPermissionByCondition', arguments);
  },
  getAccountDataPermission: function() {
    return callDubboFun.bind(this)('IDataPermissionService', 'getAccountDataPermission', arguments);
  },
  checkAccountDataPermission: function() {
    return callDubboFun.bind(this)('IDataPermissionService', 'checkAccountDataPermission', arguments);
  },
  getBasicDataPermission: function() {
    return callDubboFun.bind(this)('IDataPermissionService', 'getBasicDataPermission', arguments);
  },
  getDynamicSwitch: function() {
    return callDubboFun.bind(this)('IDataPermissionService', 'getDynamicSwitch', arguments);
  },
};
table['IDelayQueryService'] = {
  getAccountHotelByCondition: function() {
    return callDubboFun.bind(this)('IDelayQueryService', 'getAccountHotelByCondition', arguments);
  },
};
table['IEmployeeQueryService'] = {
  queryAccountIdsByEmployeeIds: function() {
    return callDubboFun.bind(this)('IEmployeeQueryService', 'queryAccountIdsByEmployeeIds', arguments);
  },
  batchQuery: function() {
    return callDubboFun.bind(this)('IEmployeeQueryService', 'batchQuery', arguments);
  },
  queryByCondition: function() {
    return callDubboFun.bind(this)('IEmployeeQueryService', 'queryByCondition', arguments);
  },
};
table['IFunctionPermissionService'] = {
  batchCheckAccountFuPermission: function() {
    return callDubboFun.bind(this)('IFunctionPermissionService', 'batchCheckAccountFuPermission', arguments);
  },
  getAccountRelationFuPermission: function() {
    return callDubboFun.bind(this)('IFunctionPermissionService', 'getAccountRelationFuPermission', arguments);
  },
  getResourceTree: function() {
    return callDubboFun.bind(this)('IFunctionPermissionService', 'getResourceTree', arguments);
  },
  checkAccountFuPermission: function() {
    return callDubboFun.bind(this)('IFunctionPermissionService', 'checkAccountFuPermission', arguments);
  },
};
table['IImageService'] = {
  batchSaveImages: function() {
    return callDubboFun.bind(this)('IImageService', 'batchSaveImages', arguments);
  },
  getImages: function() {
    return callDubboFun.bind(this)('IImageService', 'getImages', arguments);
  },
};
table['IInfrastructureService'] = {
  queryMerchantsByBasic: function() {
    return callDubboFun.bind(this)('IInfrastructureService', 'queryMerchantsByBasic', arguments);
  },
  queryCorporationsByCondition: function() {
    return callDubboFun.bind(this)('IInfrastructureService', 'queryCorporationsByCondition', arguments);
  },
  getOrganizationByCondition: function() {
    return callDubboFun.bind(this)('IInfrastructureService', 'getOrganizationByCondition', arguments);
  },
  getProfileByCondition: function() {
    return callDubboFun.bind(this)('IInfrastructureService', 'getProfileByCondition', arguments);
  },
};
table['ILegalPersonLifeCycleService'] = {
  saveOrUpdateLegalPersons: function() {
    return callDubboFun.bind(this)('ILegalPersonLifeCycleService', 'saveOrUpdateLegalPersons', arguments);
  },
};
table['ILegalPersonQueryService'] = {
};
table['ILegalPersonService'] = {
  editLegalPerson: function() {
    return callDubboFun.bind(this)('ILegalPersonService', 'editLegalPerson', arguments);
  },
  query: function() {
    return callDubboFun.bind(this)('ILegalPersonService', 'query', arguments);
  },
  createLegalPersons: function() {
    return callDubboFun.bind(this)('ILegalPersonService', 'createLegalPersons', arguments);
  },
};
table['ILogRecordService'] = {
  getLoginLogoutRecordByBasic: function() {
    return callDubboFun.bind(this)('ILogRecordService', 'getLoginLogoutRecordByBasic', arguments);
  },
  getLoginLogoutRecordByCondition: function() {
    return callDubboFun.bind(this)('ILogRecordService', 'getLoginLogoutRecordByCondition', arguments);
  },
};
table['IMasterDataService'] = {
  getCalendarHolidayByCondition: function() {
    return callDubboFun.bind(this)('IMasterDataService', 'getCalendarHolidayByCondition', arguments);
  },
};
table['INaturalPersonService'] = {
  createNaturalPersons: function() {
    return callDubboFun.bind(this)('INaturalPersonService', 'createNaturalPersons', arguments);
  },
  query: function() {
    return callDubboFun.bind(this)('INaturalPersonService', 'query', arguments);
  },
  editNaturalPerson: function() {
    return callDubboFun.bind(this)('INaturalPersonService', 'editNaturalPerson', arguments);
  },
};
table['IOtaAccountService'] = {
  get: function() {
    return callDubboFun.bind(this)('IOtaAccountService', 'get', arguments);
  },
  batchUpdate: function() {
    return callDubboFun.bind(this)('IOtaAccountService', 'batchUpdate', arguments);
  },
  batchGet: function() {
    return callDubboFun.bind(this)('IOtaAccountService', 'batchGet', arguments);
  },
  update: function() {
    return callDubboFun.bind(this)('IOtaAccountService', 'update', arguments);
  },
  create: function() {
    return callDubboFun.bind(this)('IOtaAccountService', 'create', arguments);
  },
  batchCreate: function() {
    return callDubboFun.bind(this)('IOtaAccountService', 'batchCreate', arguments);
  },
};
table['IRmDictionaryService'] = {
  select: function() {
    return callDubboFun.bind(this)('IRmDictionaryService', 'select', arguments);
  },
};
table['IThirdAccountService'] = {
  getThirdAccountByBasic: function() {
    return callDubboFun.bind(this)('IThirdAccountService', 'getThirdAccountByBasic', arguments);
  },
  batchUpdateThirdAccount: function() {
    return callDubboFun.bind(this)('IThirdAccountService', 'batchUpdateThirdAccount', arguments);
  },
  updateThirdAccountByBasic: function() {
    return callDubboFun.bind(this)('IThirdAccountService', 'updateThirdAccountByBasic', arguments);
  },
};
table['IAgreement2SacService'] = {
  getAgreementDetailList: function() {
    return callDubboFun.bind(this)('IAgreement2SacService', 'getAgreementDetailList', arguments);
  },
  queryAgreementPrepaid: function() {
    return callDubboFun.bind(this)('IAgreement2SacService', 'queryAgreementPrepaid', arguments);
  },
};
table['IAgreementBestsignCredentialCheckService'] = {
  checkPersonalCredential2: function() {
    return callDubboFun.bind(this)('IAgreementBestsignCredentialCheckService', 'checkPersonalCredential2', arguments);
  },
  checkPersonalCredential3: function() {
    return callDubboFun.bind(this)('IAgreementBestsignCredentialCheckService', 'checkPersonalCredential3', arguments);
  },
  checkEnterpirseCredential4: function() {
    return callDubboFun.bind(this)('IAgreementBestsignCredentialCheckService', 'checkEnterpirseCredential4', arguments);
  },
};
table['IAgreementLifeCycleService'] = {
  updateStatusById: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'updateStatusById', arguments);
  },
  saveOrUpdateWithInstanceId: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'saveOrUpdateWithInstanceId', arguments);
  },
  reject: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'reject', arguments);
  },
  cancelInprocessAgreement: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'cancelInprocessAgreement', arguments);
  },
  updateOwnerAppAgreementLifeCycleStatus: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'updateOwnerAppAgreementLifeCycleStatus', arguments);
  },
  generateAgreementCode: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'generateAgreementCode', arguments);
  },
  autoSign: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'autoSign', arguments);
  },
  ownerAppSaveOrUpdate: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'ownerAppSaveOrUpdate', arguments);
  },
  saveOrUpdateWithCheck: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'saveOrUpdateWithCheck', arguments);
  },
  saveOrUpdate: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'saveOrUpdate', arguments);
  },
  eventHandler: function() {
    return callDubboFun.bind(this)('IAgreementLifeCycleService', 'eventHandler', arguments);
  },
};
table['IAgreementManualAuthorizationService'] = {
  updateManualAuthrization: function() {
    return callDubboFun.bind(this)('IAgreementManualAuthorizationService', 'updateManualAuthrization', arguments);
  },
  queryManualAuthorizationDetail: function() {
    return callDubboFun.bind(this)('IAgreementManualAuthorizationService', 'queryManualAuthorizationDetail', arguments);
  },
};
table['IAgreementQueryService'] = {
  queryOperationInfoByLeadsId: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryOperationInfoByLeadsId', arguments);
  },
  queryAgreementAuditList: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryAgreementAuditList', arguments);
  },
  queryLatestAgreementInfo: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryLatestAgreementInfo', arguments);
  },
  queryByAgreementId: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryByAgreementId', arguments);
  },
  queryContactViaLeadsId: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryContactViaLeadsId', arguments);
  },
  queryLastingAgreement: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryLastingAgreement', arguments);
  },
  queryAgreementInfo: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryAgreementInfo', arguments);
  },
  queryByInstanceId: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryByInstanceId', arguments);
  },
  cancelAuditing: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'cancelAuditing', arguments);
  },
  queryByDimension: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryByDimension', arguments);
  },
  pageQuery: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'pageQuery', arguments);
  },
  queryInvalidAgreementByTime: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryInvalidAgreementByTime', arguments);
  },
  querySourceTypeInfo: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'querySourceTypeInfo', arguments);
  },
  queryOperationInfoByLeadsIdForApp: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryOperationInfoByLeadsIdForApp', arguments);
  },
  queryById: function() {
    return callDubboFun.bind(this)('IAgreementQueryService', 'queryById', arguments);
  },
};
table['ICooperationPlanRpcService'] = {
  queryByIdOrCode: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'queryByIdOrCode', arguments);
  },
  queryByHotelBizId: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'queryByHotelBizId', arguments);
  },
  deleteCooperationPlanById: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'deleteCooperationPlanById', arguments);
  },
  updateCooperationPlan: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'updateCooperationPlan', arguments);
  },
  updatePlanStatus: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'updatePlanStatus', arguments);
  },
  queryRelCooperationPlan: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'queryRelCooperationPlan', arguments);
  },
  saveCooperationPlan: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'saveCooperationPlan', arguments);
  },
  saveCooperationPlanRelation: function() {
    return callDubboFun.bind(this)('ICooperationPlanRpcService', 'saveCooperationPlanRelation', arguments);
  },
};

export default table;