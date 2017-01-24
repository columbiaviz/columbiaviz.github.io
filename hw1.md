---
layout: page
---

# HW 1: Three Ways to Discover a Dataset

Due: Tuesday 6PM 1/24

During this assignment, you will discover a dataset through three different interaction methods:

1. Using a dabatase
2. Using Python, arguably the most popular method among data scientists those days
2. Using a visual data exploration tool called Tableau

The aim is to compare and contrast the different options in terms of ease of use, power, expressiveness, etc.


## The data

The data you will work with comes from the [US Bureau of Transportations](http://www.transtats.bts.gov/). It contains one large table, with 109 columns and about 520,000 rows. The database describes all the flights that occured on US territory in January 2015, along with delay information. You may find the dataset [HERE](http://www.transtats.bts.gov/Download/On_Time_On_Time_Performance_2015_1.zip).

Here are some _examples_ of questions that the database can answer:

1. What are the busiest cities in the US? What are the most frequent routes?
2. How early or late are US flights in general?
3. Which are the best/worst companies to fly with?
4. Is there a correlation between the length of a flight and the likelihood that it will be delayed?
5. What are the most common causes of delay? Are they the same for morning and evening flights? Long and short flights? Weekdays and weekeneds?
6. How likely is a flight to get canceled?

## Setup

For this part of the assignment, you will use a hosted data science service called Instabase and Jupyter.

1. Create an account on instabase using the following [Special Registration URL](https://www.instabase.com/account/login?use_token=true)
When Instabase prompts for a token, use `prof-wu-spring2017`

2. Go to the [course instabase repository](https://www.instabase.com/tsellam/6998.002-viz/fs/Instabase%20Drive/)

3. Select the `HW1` folder, click on "more", then "Copy", then pick your repository, and copy to `Instabase Drive`.
HW1 should now be in the `fs/Instabase Drive/` folder of your repository.

### IMPORTANT!!!

For us to understand what you did, please enable logging in your notebook. To do so, go to:

- Settings (top right corner in Instabase)
- App Settings
- Jupyter Notebook / Enable Logging

This will log every execution in your notebook.  We will release this back to the class as an interesting dataset.



## Method 1: SQL

1. Open the notebook `hw1.ipynb` and follow the instructions for the SQL section


## Method 2: Python

1. Open the notebook `hw1.ipynb` and follow the instructions for the Python section


## Method 3: Tableau

Finally, you will perform data exploration with Tableau.

1. Go to the [Tableau Website](https://www.tableau.com/), and download a demo version of Tableau.

2. Connect Tableau to the the OnTime database, hosted on a postgreSQL server we set up for the course.
To do so, create a new Tableau workbook based on the following server:

    * Type: PostgreSQL (you may have to download an additional driver for postgreSQL, [here](https://www.tableau.com/support/drivers))
    * Hostname: pg-001.db.gcloud.instabase.com
    * Username: columbia
    * Password: B%38Mt5W@M*QU?Ar
    * Database: db_fea10998_f88d_4b6e_8f90_a6cd73bac65c
    * You should use the table called "Ontime".

3. Explore the dataset using Tableau.  Come up with 3 visualizations that show new insights.  Upload their screenshots into your HW1 directory.

4. **IMPORTANT:** Copy of your Tableau log file and send them with your results. The log file we are interested in is called "tabprotosrv.txt". 

    * If you use Windows, you may find it in "My Documents/My Tableau Repository/Logs". 
    * On a Mac,it should be in "Documents/My Tableau Repository/Logs". 
    * You may find more info [here](http://kb.tableau.com/articles/howto/viewing-underlying-sql-queries-desktop).

Please make sure that the logging works before you start engaging in the exploration. To do so, issue a few dummy queries, open the "tabprotosrv.txt" file and make sure that it contains SQL statemements.



## Submit

You will submit your `HW1/` directory

1. Create your report as a text document named `<youruni>.txt`  in your `HW1/` directory
    1. List your name and UNI at the top of the document
    1. For each approach, list the insights that you identified from your analysis.  One insight per line:

            SQL: insight 1
            SQL: insight 2
            ...
            Python: insight 1
            Python: insight 2
            ...
            Tableau: insight 1
            ...

          
    2. For each approach, reflect on its pros and cons in the report document.
3. Upload your Tableau logs into your `HW1` directory.  Rename it to `<youruni>_tableau.txt`.   "Method 3" section of this document describes how to get the logs.
4. Upload your screenshots into your `HW1` directory.

Submit your `HW1` directory using [this submission link](https://www.instabase.com/apps/file-submission/cmd/submit/0be40120-53de-4718-a18d-3e773da8c7b5)

### What now?

Read the papers listed on [the course website](http://columbiaviz.github.io)!
