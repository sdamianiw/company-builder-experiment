# BatchLedger — Pricing Rationale

**Date:** 2026-07-23
**Anchor:** All price comparisons are against verified incumbent prices with source URLs inline.

---

## Price Ladder

| Tier | Monthly Price | Annual Price | Limits | Intent |
|------|--------------|-------------|--------|--------|
| Free | $0 | $0 | 20 materials, 20 products, 1 channel (Etsy OR Shopify), 30 orders/month | Demonstrate reliability before asking for payment. Replace spreadsheets for new sellers. |
| Pro | $19/month | — | Unlimited materials, unlimited products, both channels (Etsy + Shopify), unlimited orders, COGS reports, CSV export, email support with <24hr SLA | Below Inventora on Shopify App Store; matches Ardent Seller; core paid offering. |
| Pro Annual | $15/month | $180/year | Same as Pro | "Less than $200/year." The sharpest verified comparison: Stocksmith Indie annual is $990/year. |

---

## Rationale by Tier

### Free Tier — $0

**Design principle:** Generous enough that a new seller gets genuine value and can verify reliability; limited enough that a real active seller hits the cap within weeks.

The 30 orders/month cap is the binding constraint. An Etsy seller with one moderately successful product launch can hit this inside a month. Inventora's Hobby free tier caps at 10 orders/month ([https://inventora.com/pricing-plans/](https://inventora.com/pricing-plans/)). At 30 orders/month, the BatchLedger Free tier is 3x more generous than the best competitor free tier, which signals confidence rather than restriction.

The 1-channel limit (Etsy OR Shopify, not both) pushes dual-channel sellers to Pro without blocking single-channel sellers from experiencing the product.

No time limit on the free tier. Time-limited trials obscure reliability by design — a seller cannot evaluate whether inventory data is accurate from a 14-day trial. Stocksmith's 14-day free trial ([https://stocksmith.io/pricing](https://stocksmith.io/pricing)) is too short to trust core business data to a new tool. BatchLedger's free tier is indefinite, which is the reliability signal.

### Pro — $19/month

**Anchor 1 — Inventora:** Inventora Starter charges $23/month on the Shopify App Store ([https://apps.shopify.com/inventora/reviews](https://apps.shopify.com/inventora/reviews)). BatchLedger Pro at $19/month undercuts by $4/month ($48/year) while offering the same channels (Etsy + Shopify) with a documented reliability advantage. The App Store is the primary discovery channel for Shopify sellers; appearing $4 cheaper with a higher rating is a direct conversion lever.

Inventora's own website prices Starter at $19/month billed annually ([https://inventora.com/pricing-plans/](https://inventora.com/pricing-plans/)), which matches BatchLedger Pro monthly. On an annual basis BatchLedger Pro Annual ($180/year) undercuts Inventora Starter annual by approximately $48/year as well, since Inventora's $19/mo annual is $228/year vs. BatchLedger's $180/year.

**Anchor 2 — Ardent Seller:** Ardent Seller is $19/month flat ([https://www.ardentseller.app/](https://www.ardentseller.app/)). Price parity with the most direct competitor is intentional: BatchLedger does not need to be cheaper than Ardent Seller — it needs to be equally priced and demonstrably more capable (Shopify integration, independent reviews, reliability proof). Competing on price below $19 would signal lower quality without winning on value.

**Anchor 3 — FormulaLedger:** FormulaLedger Starter is $19/month ([https://formulaledger.com/pricing](https://formulaledger.com/pricing)). Price parity applies here too. BatchLedger's differentiation from FormulaLedger is not price — it is order-event-triggered deduction (vs. manual batch log) and actual sales channel integration. Competing at the same price tier keeps the battle on capability, not cost.

**What $19 does NOT do:** It does not create a price moat. Ardent Seller and FormulaLedger are already here. The $19 price point is table stakes; the moat must come from reliability reputation and switching cost (recipe data + audit history over time).

### Pro Annual — $180/year ($15/month)

**The primary marketing frame:** "$180/year vs. $990/year for Stocksmith Indie."

This comparison is sourced directly from verified pricing:
- Stocksmith Indie annual: $83/month billed annually = $990/year ([https://stocksmith.io/pricing](https://stocksmith.io/pricing))
- BatchLedger Pro Annual: $180/year

The ratio is 5.5x. This is the sharpest verified comparison available and uses the same feature (auto-deduction of materials on order receipt) as the basis.

The secondary frame: "less than $200/year." This clears a psychological anchor — sellers who were on legacy Craftybase at $19/month (~$228/year) see $180/year as below their old price, which lowers the switching barrier from spreadsheets and from memory of what they used to pay.

The annual discount is $48/year off Pro monthly ($228/year vs. $180/year), a 21% reduction. This is standard SaaS annual incentive. It improves cash flow for a bootstrapped product while giving the buyer a visible saving.

---

## Pricing Comparisons — Full Verified Set

| Product | Price | Channel | Auto-deduct on order? | Source |
|---------|-------|---------|----------------------|--------|
| Stocksmith Indie (annual) | $83/mo ($990/yr) | Etsy + Shopify | Confirmed at this tier. Pro and Studio tiers not in feature comparison matrix; capability undocumented there. | [https://stocksmith.io/pricing](https://stocksmith.io/pricing) |
| Stocksmith Indie (monthly) | $99/mo | Etsy + Shopify | Same | [https://stocksmith.io/pricing](https://stocksmith.io/pricing) |
| Inventora Starter (App Store) | $23/mo | Etsy + Shopify | Yes, but documented sync bugs | [https://apps.shopify.com/inventora/reviews](https://apps.shopify.com/inventora/reviews) |
| Inventora Starter (website, annual) | $19/mo ($228/yr) | Etsy + Shopify | Yes, but documented sync bugs | [https://inventora.com/pricing-plans/](https://inventora.com/pricing-plans/) |
| Inventora Hobby (free) | $0 | Etsy + Shopify | Yes, but 10 orders/month cap | [https://inventora.com/pricing-plans/](https://inventora.com/pricing-plans/) |
| Ardent Seller | $19/mo | Etsy only | Yes | [https://www.ardentseller.app/](https://www.ardentseller.app/) |
| FormulaLedger Starter | $19/mo | None (no channel sync) | Manual batch log only | [https://formulaledger.com/pricing](https://formulaledger.com/pricing) |
| Katana | $199/mo+ | Etsy (via integrations) + Shopify | Yes | Cited in rescue-etsy-cogs.md |
| **BatchLedger Free** | **$0** | **1 channel, 30 orders/mo** | **Yes** | — |
| **BatchLedger Pro** | **$19/mo** | **Both channels, unlimited** | **Yes** | — |
| **BatchLedger Pro Annual** | **$15/mo ($180/yr)** | **Both channels, unlimited** | **Yes** | — |

---

## What We Are Not Doing

**Not going below $19/month.** There is no credible sub-$15 comparable in this segment. Going lower would be a price signal against quality, not a competitive advantage.

**Not launching with a Shopify App Store price different from website price.** Inventora charges $23/mo on the App Store vs. $19/mo on its website. The inconsistency creates confusion and trust friction. BatchLedger Pro will be $19/month everywhere.

**Not building a freemium indefinite Pro.** The free tier has hard limits that ensure an active seller converts to Pro. A seller running 30+ orders a month on Etsy is generating real revenue. Asking them to pay $19/month is reasonable. An unlimited free tier would signal that $19/month is not worth paying.

**Not price-anchoring against Katana.** Katana at $199/month is priced for a different buyer (larger manufacturers). Comparing to Katana would confuse the persona and imply feature parity we do not have.
