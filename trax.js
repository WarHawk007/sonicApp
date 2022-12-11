const axios = require('axios')
const moment = require('moment')
const params = {
    "https://sonic.pk/cod/reports/summary/list?draw": "5",
    "columns": {
        "0": {
            "data": "0",
            "name": "serial_number",
            "searchable": "false",
            "orderable": "false",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "1": {
            "data": "tracking_number_link",
            "name": "shipments.tracking_number",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "2": {
            "data": "order_id",
            "name": "shipments.order_id",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "3": {
            "data": "user_name",
            "name": "u.name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "4": {
            "data": "consignee_name",
            "name": "shipments.consignee_name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "5": {
            "data": "consignee_phone",
            "name": "shipments.consignee_phone_number_1",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "6": {
            "data": "current_status",
            "name": "ss.name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "7": {
            "data": "return_reason",
            "name": "ssr.name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "8": {
            "data": "payment_status",
            "name": "sps.name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "9": {
            "data": "service_type",
            "name": "bt.booking_type",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "10": {
            "data": "product_name",
            "name": "p.product_name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "11": {
            "data": "description",
            "name": "si.description",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "12": {
            "data": "booking_date",
            "name": "booking_date",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "13": {
            "data": "arrival_date",
            "name": "sj.created_at",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "14": {
            "data": "origin",
            "name": "oc.name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "15": {
            "data": "destination",
            "name": "dc.name",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "16": {
            "data": "collection_amount",
            "name": "shipments.amount",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "17": {
            "data": "actual_weight",
            "name": "shipments.actual_weight",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "18": {
            "data": "weight_charges",
            "name": "shipments.weight_charges",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        },
        "19": {
            "data": "cash_handling_charges",
            "name": "shipments.cash_handling_charges",
            "searchable": "true",
            "orderable": "true",
            "search": {
                "value": "",
                "regex": "false"
            }
        }
    },
    "order": [
        {
            "column": "12",
            "dir": "desc"
        }
    ],
    "start": "0",
    "length": "-1",
    "search": {
        "value": "",
        "regex": "false"
    },
    "search_user": "21652",
        "search_origin": "",
    "search_destination": "",
    "cards_filter": "",
    "search_date_from": "2022-1-01",
    "search_date_to": "2022-12-31",
    "_": "1670746945411"
}

const getDetails = (start, end) => {
    params.search_date_from = moment(start).format('YYYY-MM-DD')
    params.search_date_to = moment(end).format('YYYY-MM-DD')
    return new Promise((resolve, reject) => {
        axios.get('https://sonic.pk/cod/reports/summary/list', {
            params,
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Linux\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "twk_idm_key=yxBrlEsIOTmEwJDGY-KQW; TawkConnectionTime=0; twk_uuid_5d8323ab9f6b7a4457e2756b=%7B%22uuid%22%3A%221.6Api7MnmgAGsvJ9t668apvTShQ14rtlfUNvkduMKyTnA4XEbfmIe33D4mKNLgCfDxMzp0KRTk4q4l03iiGGmKb8BXvN1LP0KsKsCwWKmrUyJHK4Y%22%2C%22version%22%3A3%2C%22domain%22%3A%22sonic.pk%22%2C%22ts%22%3A1670782483789%7D; XSRF-TOKEN=eyJpdiI6Ikl3WHhIa3hWRUJTb0NTNGVcL2RJMEJnPT0iLCJ2YWx1ZSI6IkRcL0VBN0pzVHhXK0lDSEhsNVl5RXVqbTBUYk0rZ1BIcktVNjFzbENhRVZVaVM1RjhkdnIwTDlDM09pT0VCRnJTIiwibWFjIjoiOWExYzJlMTFlMDZhN2RmZDc1YTNlNTU4YTc5NzhhNDljYThkYTNiNjE4Y2UyNWUyYTYxMDRiOWM0N2EzZmU4ZSJ9; traxlogistics_session=eyJpdiI6InNKY2d4WTY2Q2I5RWNsd2I3VXkySlE9PSIsInZhbHVlIjoiSUpwbDkyTHFjNlVld3dmclE5ck5KWTZycExqbjFZTDNpN2ZEMGFhVHhzam5GT3NMc2FWRXhLNTdaXC9OZEVMXC9OIiwibWFjIjoiZDQ0ZGE1YjY3Mzc5NzI3OTA1MmI4NGQ2MTk0MzkyNDdlYmRlOWFkYjk1NWNlOTQwZmFiMWQ5OWUyNWUzMDJjZiJ9",
                "Referer": "https://sonic.pk/cod/reports/summary",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
        }).then(resp => {
                const formated = {
                    inTransit: [],
                    booked: [],
                    delivered: [],
                    returned: [],
                }
                const reports = resp.data.data
                reports.forEach((report) => {
                    if (report.current_status === 'Shipment - Booked') {
                        formated.booked.push(report)
                    } else if (report.current_status === 'Shipment - In Transit') {
                        formated.inTransit.push(report)
                    } else if (report.current_status === 'Shipment - Delivered') {
                        formated.delivered.push(report)
                    } else if (['Return - In Transit', 'Return - Delivered to Shipper'].includes(report.current_status)) {
                        formated.returned.push(report)
                    }
                })
                let totalBooked = 0
                let totalTransit = 0
                let totalDelivered = 0
                let totalReturned = 0
                formated.booked.forEach((d) => {
                    totalBooked += Number(d.collection_amount.replace(/,/g, ''))
                })
                formated.delivered.forEach((d) => {
                    totalDelivered += Number(d.collection_amount.replace(/,/g, ''))
                })
                formated.inTransit.forEach((d) => {
                    totalTransit += Number(d.collection_amount.replace(/,/g, ''))
                })
                formated.returned.forEach((d) => {
                    totalReturned += Number(d.collection_amount.replace(/,/g, ''))
                })
                resolve({
                    totalBooked,
                    totalTransit,
                    totalDelivered,
                    totalReturned,
                    returnedPercent: Math.round((totalReturned/(totalDelivered + totalTransit)) * 100) + '%'
                })
            }).catch(err => {
                reject(err)
            })
    })
}

module.exports = getDetails