package com.inspur.webviewdemo;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;


import butterknife.BindView;
import butterknife.ButterKnife;

public class WebViewActivity extends Activity {

    @BindView(R.id.wvCon)
    WebView wvCon;

    WebSettings settings;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);
        ButterKnife.bind(this);

        String url = getIntent().getStringExtra("url");
        wvCon.loadUrl(url);

        settings = wvCon.getSettings();
        //设置可自由缩放网页
        //出现net::ERR_CACHE_MISS错误提示
        //使用缓存的方式是基于导航类型。正常页面加载的情况下将缓存内容。当导航返回,
        //内容不会恢复（重新加载生成）,而只是从缓存中取回内容
//        if (Build.VERSION.SDK_INT >= 19) {
//            settings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
//        }
        settings.setSupportZoom(true);
        settings.setJavaScriptEnabled(true);//有JavaScript功能的一定要实现
        settings.setBuiltInZoomControls(true);//支持缩放
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);//bushi
        settings.setAllowContentAccess(true);//
        settings.setAppCacheEnabled(true);//是否使用缓存
        // 如果页面中链接，如果希望点击链接继续在当前browser中响应，
        // 而不是新开Android的系统browser中响应该链接，必须覆盖webview的WebViewClient对象
//        browser.setWebChromeClient(new WebChromeClient());//只写这句会选择使用web浏览器选择
       /* wvCon.setWebViewClient(new WebViewClient() {
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url.startsWith("http:") || url.startsWith("https:")) {
                    view.loadUrl(url);
                    return false;
                } else {
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    startActivity(intent);
                    return true;
                }
            }
        });*/
    }


    public class WebAppInterface   {

        Context mContext;

        WebAppInterface(Context   c) {

            mContext   = c;

        }

        //参数名这个自己定义，和网页js传参对应即可

        /**
         * 与js交互时用到的方法，在js里直接调用的
         */
        @JavascriptInterface
        public void showToast(String ssss) {

            ssss ="abnn";
        }

    }


    public class TopoData {
        private Context mContext;
        private String city_id;
        private String ems_id;
        private String county_id;
        private String subnet_id;
        private String subnet_type;
        public TopoData(Context c,String city_id,String ems_id,String county_id,String subnet_id,String subnet_type){
            mContext = c;
            this.city_id = city_id;
            this.ems_id = ems_id;
            this.county_id = county_id;
            this.subnet_id = subnet_id;
            this.subnet_type = subnet_type;
        }

        @JavascriptInterface
        public String getCity_id() {
            return city_id;
        }
        @JavascriptInterface
        public String getEms_id() {
            return ems_id;
        }
        @JavascriptInterface
        public String getCounty_id() {
            return county_id;
        }
        @JavascriptInterface
        public String getSubnet_id() {
            return subnet_id;
        }
        @JavascriptInterface
        public String getSubnet_type() {
            return subnet_type;
        }

        @JavascriptInterface
        public void toNePage(String neId){
            /*Intent i = new Intent(LocalWebViewActivity.this,NePageActivity.class);
            i.putExtra("neId",neId);
            startActivity(i);*/
        }

        @JavascriptInterface
        public void showDetail(String listData){
            Log.v("LocalWebViewActivity",listData+"");
//            List<CellDetailInfo> detailList = GsonUtil.GsonToList(listData,CellDetailInfo[].class);
//            Iterator<CellDetailInfo> it = detailList.iterator();
//            List<CellDetailInfo> showList = new ArrayList<>();
//            for(CellDetailInfo cellDetailInfo : detailList){
//                if(cellDetailInfo.getShow()){
//                    showList.add(cellDetailInfo);
//                }
//            }
//            View view = View.inflate(mContext, R.layout.celldetail_dialog, null);
//            RecyclerView reSubnet = (RecyclerView) view.findViewById(R.id.rv_subnet);
//            TextView tv_panel = view.findViewById(R.id.tv_panel);
//            tv_panel.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View v) {
//                    String uuid ="";
//                    for(CellDetailInfo cellDetailInfo :detailList){
//                        if(cellDetailInfo.getEnName().equals("int_id")){
//                            uuid = cellDetailInfo.getValue();
//                        }
//                    }
//                    Intent i = new Intent(LocalWebViewActivity.this,NePageActivity.class);
//                    i.putExtra("neId",uuid);
//                    startActivity(i);
//                }
//            });
//
//            TextView tv_relate_site = view.findViewById(R.id.tv_relate_site);
//            tv_relate_site.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View v) {
//                    String uuid ="";
//                    for(CellDetailInfo cellDetailInfo :detailList){
//                        if(cellDetailInfo.getEnName().equals("int_id")){
//                            uuid = cellDetailInfo.getValue();
//                        }
//                    }
//                    presenter.getElementSiteinfo(uuid);
//                }
//            });
//
//
//
//            CellDetailAdapter cellDetailAdapter = new CellDetailAdapter(LocalWebViewActivity.this,R.layout.item_celldetail,showList);
//            reSubnet.setHasFixedSize(true);
//            reSubnet.setLayoutManager(new LinearLayoutManager(mContext));
//            reSubnet.setItemAnimator(new DefaultItemAnimator());
//            reSubnet.setAdapter(cellDetailAdapter);
//            reSubnet.addItemDecoration(new DividerItemDecoration(mContext,DividerItemDecoration.VERTICAL_LIST));
//            BottomSheetDialog bottomSheetDialog = new BottomSheetDialog(mContext);
//            bottomSheetDialog.setContentView(view);
//            bottomSheetDialog.show();
        }


        @JavascriptInterface
        public void showNextTopo(String node_city_id,String node_ems_id,String node_subnet_id,String node_subnet_type,String node_county_id){

        }

        @JavascriptInterface
        public void showInsideTOpo(String listdata){
//            Log.v("LocalWebViewActivity",listdata+"");
//            List<CellDetailInfo> detailList = GsonUtil.GsonToList(listdata,CellDetailInfo[].class);
//            String uuid ="";
//            for(CellDetailInfo cellDetailInfo :detailList){
//                if(cellDetailInfo.getEnName().equals("int_id")){
//                    uuid = cellDetailInfo.getValue();
//                }
//            }
//            TopoConnectActivity.startAct(mContext, AppConfig.Constants.TOPO_LIST_IDS, uuid);
        }

    }
}
