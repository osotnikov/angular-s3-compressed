@echo off
echo *********** Set AWS_PROFILE to stockmonitor *************
set AWS_PROFILE=myprofile
echo. & echo *********** Build UI ************* & echo.
call ng build --prod
echo. & echo *********** Upload front end to s3 ************* & echo.
aws s3 sync --exclude "index.html" --exclude "favicon.ico" --metadata-directive REPLACE --content-encoding "gzip" dist s3://%npm_package_config_frontEndBucketName%
aws s3 sync --exclude "*" --include "index.html" --include "favicon.ico" dist s3://%npm_package_config_frontEndBucketName%
