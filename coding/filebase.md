# Filebase

## CORS

see https://docs.filebase.com/configurations/cli-tools-and-resources/cross-origin-resource-sharing-cors/create-and-apply-a-cors-rule-to-a-filebase-bucket

Policy to allow all `GET` requests:

```json
{
  "CORSRules": [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["GET"],
      "AllowedOrigins": ["*"],
      "ExposeHeaders": []
    }
  ]
}
```

Update Policy for Bucket:

```bash
aws --endpoint https://s3.filebase.com s3api put-bucket-cors --bucket $BUCKET_NAME --cors-configuration=file://filebase-cors.json

aws --endpoint https://s3.filebase.com s3api get-bucket-cors --bucket $BUCKET_NAME
```
