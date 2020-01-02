package com.inspur.webviewdemo;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.widget.EditText;
import android.widget.TextView;

import com.inspur.baidutest.activity.RemoteActivity;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends Activity {

    @BindView(R.id.tvLabel)
    TextView tvLabel;
    @BindView(R.id.eTurl)
    EditText eTurl;
    @BindView(R.id.tvClick)
    TextView tvClick;

    final static int REQUEST_READ_PHONE_STATE =10400;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        int permissionCheck = ContextCompat.checkSelfPermission(this, Manifest.permission.READ_PHONE_STATE);

        if (permissionCheck != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.READ_PHONE_STATE}, REQUEST_READ_PHONE_STATE);
        } else {
            //TODO
        }






    }


    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        switch (requestCode) {
            case REQUEST_READ_PHONE_STATE:
                if ((grantResults.length > 0) && (grantResults[0] == PackageManager.PERMISSION_GRANTED)) {
                    //TODO
                    TelephonyManager telephonyManager = (TelephonyManager)getSystemService(Context.TELEPHONY_SERVICE);
                    @SuppressLint("MissingPermission")
                    String imei = telephonyManager.getDeviceId();
                    @SuppressLint("MissingPermission")
                    String imsi = telephonyManager.getSubscriberId();
                    Log.v("IMEI",imei);
                    Log.v("IMSI",imsi);
                }
                break;

            default:
                break;
        }
    }

    @OnClick(R.id.tvClick)
    public void onViewClicked() {
        String url = eTurl.getText().toString();
        Log.v("webviewdemo",url);
//        Intent intent = new Intent(MainActivity.this, TopoViewActivity.class);
//        intent.putExtra("url",url);
//        startActivity(intent);
        Intent intent = new Intent(MainActivity.this, RemoteActivity.class);
        startActivity(intent);
    }
}
