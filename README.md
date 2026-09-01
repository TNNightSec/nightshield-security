# NightShield Security — GitHub Pages

Upload these files to the root of a public GitHub repository and enable GitHub Pages from the `main` branch.

The included `CNAME` uses `nightshieldsecurity.uk`.

The enquiry form is static and GitHub Pages compatible. It opens the visitor's email application with:
- To: t.newman@nightshieldsecurity.uk
- CC: s.page@nightshieldsecurity.uk

IONOS DNS for the root domain should use GitHub's current Pages A records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

For `www`, use a CNAME to `YOUR-GITHUB-USERNAME.github.io`.

Keep existing IONOS MX/email records.
