# Routing Fixes

This document outlines the routing changes made to fix the navigation issues in the YFC-Mobile app.

## 1. Removing Excess Tabs (Login & Explore)
**Issue:** The bottom tab bar was showing `login` and `explore` as clickable tabs which shouldn't be there.
**Why it happened:** In Expo Router's file-based routing, any `.tsx` file in the `app` folder (where the `Tabs` layout is defined) is automatically included in the bottom tab bar unless explicitly hidden.
**Solution:** In `src/app/_layout.tsx`, we added specific `Tabs.Screen` definitions for both `login` and `explore` and set their `href` option to `null`. This keeps them routable but hides them from the bottom tab bar UI.

```tsx
<Tabs.Screen name="login" options={{ href: null }} />
<Tabs.Screen name="explore" options={{ href: null }} />
```

## 2. Fixing Profile Section Back Navigation
**Issue:** When navigating to pages within the `profile_section` (like `app-preferences.tsx` or `personal-information.tsx`), pressing the custom back button would sometimes route to the wrong screen instead of going back to the main Profile screen.
**Why it happened:** The back button was using `router.back()`. Expo Router's `router.back()` relies on the navigation stack history. If the user navigated between different profile sections directly (or if the stack state was otherwise messy), `router.back()` would simply go to the previous screen in history, which might not be the Profile screen.
**Solution:** We replaced `router.back()` with `router.push('/profile')` in all the profile section screens. This ensures that clicking the back button will *always* explicitly route the user directly to the `profile.tsx` screen, providing a reliable and predictable navigation experience.

Files updated:
- `src/app/profile_section/app-preferences.tsx`
- `src/app/profile_section/personal-information.tsx`
- `src/app/profile_section/registered-events.tsx`
- `src/app/profile_section/saved-prayer-intentions.tsx`
