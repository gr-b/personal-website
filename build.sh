ng build --prod --base-href "./"
rm -rf docs
mv dist docs
echo "griffinbishop.com" >> docs/CNAME
git add --all
git commit -m "Deploy prod"
git push -u origin master
