# 🚀 Deployment Checklist

## Pre-Deployment

### 1. Update Domain References
- [ ] Replace `https://chewieai.com/` with your actual domain in `index.html`
  - Search for "chewieai.com" and replace all instances
  - Lines to update: 18, 21, 28, 31, 39

### 2. Update Social Media Handles
- [ ] Update Twitter handle in `index.html` line 32
  - Current: `@ChewieAI`
  - Change to: `@YourActualHandle`

### 3. Update Waitlist Link
- [ ] Add your actual waitlist/signup link in `index.html`
  - Search for "YOUR_TYPEFORM_LINK_HERE" (line 543)
  - Replace with your Typeform, Google Form, or signup page URL

### 4. Verify All Files Exist
- [ ] favicon-16x16.png
- [ ] favicon-32x32.png
- [ ] favicon.ico
- [ ] apple-touch-icon.png
- [ ] android-chrome-192x192.png
- [ ] android-chrome-512x512.png
- [ ] og-image.png
- [ ] site.webmanifest
- [ ] logo.png
- [ ] index.html

## Deployment

### 5. Upload Files
Upload these files to your web server:
- [ ] index.html
- [ ] logo.png
- [ ] All favicon files (favicon-*.png, favicon.ico)
- [ ] apple-touch-icon.png
- [ ] android-chrome-*.png
- [ ] og-image.png
- [ ] site.webmanifest
- [ ] vercel.json (if using Vercel)

### 6. Verify File Accessibility
Test that these URLs work (replace with your domain):
- [ ] https://yourdomain.com/
- [ ] https://yourdomain.com/favicon.ico
- [ ] https://yourdomain.com/og-image.png
- [ ] https://yourdomain.com/apple-touch-icon.png
- [ ] https://yourdomain.com/site.webmanifest

## Post-Deployment Testing

### 7. Test Favicon
- [ ] Open your site in Chrome
- [ ] Check browser tab shows your logo
- [ ] Bookmark the page and verify bookmark icon
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge

### 8. Test Mobile Icons
- [ ] iOS Safari: Add to Home Screen
- [ ] Android Chrome: Add to Home Screen
- [ ] Verify icon appears correctly

### 9. Test Social Sharing

**Facebook/LinkedIn:**
- [ ] Go to https://developers.facebook.com/tools/debug/
- [ ] Enter your URL
- [ ] Click "Scrape Again"
- [ ] Verify image shows correctly
- [ ] Verify title and description are correct
- [ ] Share on Facebook to test live

**Twitter:**
- [ ] Go to https://cards-dev.twitter.com/validator
- [ ] Enter your URL
- [ ] Verify card preview
- [ ] Tweet your link to test live

**General Testing:**
- [ ] Test with https://www.opengraph.xyz/
- [ ] Test with https://metatags.io/
- [ ] Share in Slack
- [ ] Share in Discord
- [ ] Share in WhatsApp

### 10. SEO Verification
- [ ] Google Search Console: Submit sitemap
- [ ] Verify meta description appears in search results
- [ ] Check canonical URL is correct
- [ ] Verify robots.txt allows indexing

### 11. Performance Check
- [ ] Run Google PageSpeed Insights
- [ ] Verify all images load quickly
- [ ] Check mobile responsiveness
- [ ] Test on slow 3G connection

### 12. Browser Console Check
- [ ] Open browser DevTools (F12)
- [ ] Check Console tab for errors
- [ ] Check Network tab for 404s
- [ ] Verify all resources load successfully

## Optional Enhancements

### 13. Analytics (Optional)
- [ ] Add Google Analytics
- [ ] Add Facebook Pixel
- [ ] Add Twitter conversion tracking
- [ ] Set up goal tracking for waitlist signups

### 14. Additional Meta Tags (Optional)
- [ ] Add structured data (JSON-LD)
- [ ] Add breadcrumb schema
- [ ] Add organization schema
- [ ] Add FAQ schema

### 15. Security Headers (Optional)
- [ ] Add Content-Security-Policy
- [ ] Add X-Frame-Options
- [ ] Add X-Content-Type-Options
- [ ] Enable HTTPS/SSL

## Monitoring

### 16. Set Up Monitoring
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Monitor social sharing analytics
- [ ] Track waitlist conversion rate
- [ ] Monitor page load times

## Common Issues & Solutions

### Favicon Not Showing
✅ **Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Wait 5-10 minutes for CDN cache
4. Try incognito mode

### Social Preview Not Updating
✅ **Solution:**
1. Use Facebook Debugger to force scrape
2. Wait 24 hours for cache to clear
3. Verify image URL is absolute (not relative)
4. Check image is publicly accessible

### Mobile Icon Wrong Size
✅ **Solution:**
1. Verify apple-touch-icon.png is exactly 180x180px
2. Clear Safari cache on iOS
3. Remove from home screen and re-add
4. Check file isn't corrupted

### OG Image Not Loading
✅ **Solution:**
1. Verify file is uploaded to server
2. Check file permissions (should be readable)
3. Test URL directly in browser
4. Ensure file size is under 8MB (yours is 122KB ✓)

## Success Metrics

After deployment, track:
- [ ] Favicon appears in all browsers
- [ ] Social shares show correct image
- [ ] Mobile icons work on iOS and Android
- [ ] Page loads in under 3 seconds
- [ ] No console errors
- [ ] All meta tags validated

## Need Help?

If you encounter issues:
1. Check SETUP-COMPLETE.md for detailed info
2. Review FAVICON-SETUP.md for troubleshooting
3. Use browser DevTools to debug
4. Test with online validators

---

**Once all items are checked, your site is ready for launch! 🎉**
