# 📊 Google Analytics 4 Setup Guide

Google Analytics has been added to your `index.html`. Follow these steps to connect it:

---

## Step 1: Create Google Analytics Account

1. **Go to:** https://analytics.google.com/
2. **Sign in** with your Google account
3. Click **"Start measuring"** (or "Admin" if you have an existing account)

---

## Step 2: Set Up Your Property

### If Creating New Account:
1. **Account name:** ChewieAI (or your company name)
2. Click **Next**

### Create Property:
1. **Property name:** ChewieAI Website
2. **Reporting time zone:** Select your timezone
3. **Currency:** Select your currency
4. Click **Next**

### Business Information:
1. **Industry category:** Technology or Finance
2. **Business size:** Select appropriate size
3. Click **Next**

### Business Objectives:
1. Select relevant goals (e.g., "Generate leads", "Examine user behavior")
2. Click **Create**

---

## Step 3: Set Up Data Stream

1. **Platform:** Select **Web**
2. **Website URL:** `https://chewieai.com` (or your actual domain)
3. **Stream name:** ChewieAI Landing Page
4. Click **Create stream**

---

## Step 4: Get Your Measurement ID

After creating the stream, you'll see:

```
Measurement ID: G-XXXXXXXXXX
```

**This is your tracking ID!** It looks like `G-ABC123XYZ`

---

## Step 5: Update Your Website

1. **Open:** `index.html`
2. **Find lines 46 and 51** (the Google Analytics code)
3. **Replace** `G-XXXXXXXXXX` with your actual Measurement ID

**Before:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

**After (example):**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ABC123XYZ');
</script>
```

---

## Step 6: Deploy & Test

1. **Save** your `index.html` file
2. **Deploy** your website
3. **Visit** your live site
4. **Check in GA4:** Go to Reports → Realtime
   - You should see yourself as an active user within 30 seconds!

---

## Step 7: Verify Installation (Optional)

### Using Chrome Extension:
1. Install **"Google Analytics Debugger"** Chrome extension
2. Visit your site
3. Open Chrome DevTools (F12) → Console tab
4. Look for GA4 tracking events

### Using GA4 Interface:
1. Go to **Admin** → **Data Streams**
2. Click your stream
3. Scroll to **"View tag instructions"**
4. Click **"Test your implementation"**
5. Visit your site in another tab

---

## 📈 What You'll Track Automatically

Once set up, GA4 will automatically track:

- ✅ **Page views** - Every page visit
- ✅ **Sessions** - User sessions and duration
- ✅ **User demographics** - Location, device, browser
- ✅ **Traffic sources** - Where users come from (Google, social, direct)
- ✅ **Engagement** - Scroll depth, time on page
- ✅ **Events** - Button clicks, form submissions (with enhanced measurement)

---

## 🎯 Recommended: Enable Enhanced Measurement

In your GA4 Data Stream settings:

1. Click your **Web stream**
2. Scroll to **"Enhanced measurement"**
3. Toggle **ON** (should be on by default)

This automatically tracks:
- Scrolls (90% depth)
- Outbound clicks
- Site search
- Video engagement
- File downloads

---

## 🔒 Privacy & GDPR Compliance

If you have EU visitors, consider:

1. **Cookie consent banner** - Use tools like:
   - Cookiebot
   - OneTrust
   - Termly

2. **Update Privacy Policy** - Mention Google Analytics usage

3. **IP Anonymization** - GA4 does this by default

---

## 📊 Useful GA4 Reports

After a few days of data:

- **Realtime** - See current visitors
- **Acquisition** - Where users come from
- **Engagement** - Most viewed pages
- **Demographics** - User locations and devices
- **Conversions** - Track "Join waitlist" clicks (needs setup)

---

## 🎯 Track "Join Waitlist" Button (Advanced)

To track when users click your waitlist button:

1. In GA4, go to **Configure** → **Events**
2. Click **Create event**
3. Or add this to your button in HTML:

```html
<a href="YOUR_TYPEFORM_LINK" 
   class="cta-primary"
   onclick="gtag('event', 'click', {'event_category': 'CTA', 'event_label': 'Join Waitlist'});">
   Join waitlist →
</a>
```

---

## 🆘 Troubleshooting

### Not seeing data?
- Wait 24-48 hours for initial data
- Check Realtime reports (shows immediate data)
- Verify Measurement ID is correct
- Check browser ad blockers aren't blocking GA

### Still not working?
- Open browser console (F12) and look for errors
- Try in incognito mode
- Verify the script loads: View page source and search for "gtag"

---

## ✅ Quick Checklist

- [ ] Created Google Analytics 4 account
- [ ] Created property and data stream
- [ ] Copied Measurement ID (G-XXXXXXXXXX)
- [ ] Replaced placeholder in index.html (lines 46 & 51)
- [ ] Deployed updated website
- [ ] Verified tracking in Realtime reports
- [ ] Enabled Enhanced Measurement
- [ ] (Optional) Set up cookie consent
- [ ] (Optional) Track conversion events

---

**You're all set!** 🎉

Your analytics will start collecting data as soon as you deploy the updated `index.html` with your real Measurement ID.
