package com.tatvaalife.emams;

import android.os.Bundle;
import android.view.MenuItem;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.navigation.NavigationView;

public class Home extends AppCompatActivity {

    BottomNavigationView BNV;
    public NavigationView navigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        BNV = findViewById(R.id.bottom_navigation);
        BottomNavigationView bottomNavigationView =  findViewById(R.id.bottom_navigation);
        bottomNavigationView.setOnNavigationItemSelectedListener(item -> { // using lamda
            myClickItem(item); //call here
            return true;
        });
    }
    private void myClickItem(MenuItem item){
        switch (item.getItemId()) {
            case R.id.home_page:

                Toast.makeText(getApplicationContext(), "Hello", Toast.LENGTH_SHORT).show();
                break;

            case R.id.transaction_page:
                // DO SOMETHING
                break;
        }
    }
}