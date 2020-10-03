@echo off
echo *********** Set AWS_PROFILE to stockmonitor *************
set AWS_PROFILE=myprofile
echo. & echo *********** Build UI ************* & echo.
call ng build --prod
echo. & echo *********** Upload front end to s3 ************* & echo.
aws s3 sync --exclude "index.html" --exclude "favicon.ico" --metadata-directive REPLACE --content-encoding "gzip" ../stock-monitor-angular2-front-end/dist s3://osotnikov-stock-monitor-front-end-resources-s3-bucket
aws s3 sync --exclude "*" --include "index.html" --include "favicon.ico" ../stock-monitor-angular2-front-end/dist s3://osotnikov-stock-monitor-front-end-resources-s3-bucket
