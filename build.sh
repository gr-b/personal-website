ng build --prod --base-href "https://gr-b.github.io/personal-website"
rm -rf docs
mv dist docs
echo "griffinbishop.com" >> docs/CNAME
git add --all
git commit -m "Deploy prod"
git push -u origin master
