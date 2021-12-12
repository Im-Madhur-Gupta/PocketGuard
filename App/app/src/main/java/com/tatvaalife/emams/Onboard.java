package com.tatvaalife.emams;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.viewpager2.widget.ViewPager2;

import com.google.android.material.tabs.TabLayout;

public class Onboard extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_onboard);

        TabLayout tabLayout;
        ViewPager2 pager2;
        FragmentAdapter adapter;

            tabLayout = findViewById(R.id.tab_layout);
            pager2 = findViewById(R.id.view_pager2);


            FragmentManager fm = getSupportFragmentManager();
            adapter = new FragmentAdapter(fm, getLifecycle());
            pager2.setAdapter(adapter);

            tabLayout.addTab(tabLayout.newTab().setText(""));
            tabLayout.addTab(tabLayout.newTab().setText(""));
            tabLayout.addTab(tabLayout.newTab().setText(""));

            tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
                @Override
                public void onTabSelected(TabLayout.Tab tab) {
                    pager2.setCurrentItem(tab.getPosition());
                }

                @Override
                public void onTabUnselected(TabLayout.Tab tab) {

                }

                @Override
                public void onTabReselected(TabLayout.Tab tab) {

                }
            });


            pager2.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
                @Override
                public void onPageSelected(int position) {
                    tabLayout.selectTab(tabLayout.getTabAt(position));
                }
            });

        }

    public void openSignUp(View view) {
        startActivity(new Intent(getApplicationContext(),SignUp.class));
    }

    public void openLogin(View view) {
        startActivity(new Intent(getApplicationContext(),Login.class));
    }
}