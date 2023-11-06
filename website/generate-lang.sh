langs=("fr" "en" "ar" "bg" "zh" "nl" "de" "he" "it" "pl" "pt" "ru" "es")

for lang in "${langs[@]}"
do
    yarn write-translations --locale $lang
done

for lang in "fr" "en" "ar" "bg" "zh" "nl" "de" "he" "it" "pl" "pt" "ru" "es";
do
  mkdir -p "../docs/i18n/$lang/docusaurus-plugin-content-docs/current"
  cp -r ../docs/diagrams ../docs/CHANGELOG.md ../docs/CONTACT.md ../docs/INTRODUCTION.md ../docs/SUPPORT.md "../docs/i18n/$lang/docusaurus-plugin-content-docs/current"
done