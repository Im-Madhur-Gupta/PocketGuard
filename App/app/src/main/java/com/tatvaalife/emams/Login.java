package com.tatvaalife.emams;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class Login extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void goToOnBoard(View view) {
        startActivity(new Intent(getApplicationContext(),Onboard.class));
        finish();
    }
}