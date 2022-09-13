export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

type Pageview = (url: string) => void

// interface Window {
//     gtag(type: 'config', googleAnalyticsId: string, { page_path: string })
//     gtag(
//         type: 'event',
//         eventAction: string,
//         fieldObject: {
//             event_label: string
//             event_category: string
//             value?: number
//         }
//     )
// }

type Event = {
    action?: string
    category?: string
    label?: string | number | boolean
    value?: string
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview: Pageview = (url) => {
    ;(window as any).gtag('config', GTM_ID, {
        page_path: url
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: Event) => {
    ;(window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    })
}
