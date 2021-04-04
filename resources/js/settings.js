import { TModal, TInput, TDatepicker } from "vue-tailwind/dist/components"
import Russian from "vue-tailwind/dist/l10n/ru"
export default {
    't-modal': {
        component: TModal,
        props: {
            fixedClasses: {
                overlay: 'flex items-center z-40 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50 bg-black',
                wrapper: 'relative mx-auto z-50 w-128 px-8 py-24',
                modal: 'overflow-visible relative  rounded',
                body: 'p-8 flex flex-col',
                header: 'px-8 pt-16 text-4xl font-bold',
                footer: ' p-8 rounded-b',
                close: 'flex items-center justify-center absolute rounded-full right-3 top-3 h-8 w-8 transition duration-150 border border-white border-solid hover:opacity-50 clickable focus:border-opacity-50'
            },
            classes: {
                overlay: '',
                wrapper: '',
                modal: 'bg-violet-800 rounded-lg border border-solid border-white',
                body: '',
                header: '',
                footer: 'bg-gray-100',
                close: '',
                closeIcon: 'fill-current h-4 w-4',
                overlayEnterClass: 'opacity-0',
                overlayEnterActiveClass: 'transition ease-out duration-150',
                overlayEnterToClass: 'opacity-100',
                overlayLeaveClass: 'opacity-100',
                overlayLeaveActiveClass: 'transition ease-in duration-150',
                overlayLeaveToClass: 'opacity-0',
                enterClass: '-translate-y-8',
                enterActiveClass: 'transform ease-out duration-150',
                enterToClass: 'opacity-100',
                leaveClass: 'opacity-100',
                leaveActiveClass: 'transform ease-in duration-150',
                leaveToClass: '-translate-y-8'
            }
        }
    },
    't-input': {
        component: TInput,
        props: {
            fixedClasses: 'block w-full px-4 py-3 transition duration-150 ease-in-out border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-50 font-medium text-lg',
            classes: 'placeholder-gray-500 bg-violet-900 border-violet-1000 focus:border-white focus:border-opacity-50',
            variants: {
                danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
                success: 'border-green-300 bg-green-50 placeholder-gray-500 text-green-900'
            }
        }
  },
    't-datepicker': {
            component: TDatepicker,
            props: {
                locale: Russian,
                weekStart: 1,
                fixedClasses: {
                    navigator: 'flex',
                    navigatorViewButton: 'flex items-center',
                    navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
                    navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
                    navigatorLabel: 'flex items-center py-1',
                    navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
                    navigatorNextButtonIcon: 'h-6 w-6 inline-flex',
                    inputWrapper: 'relative',
                    viewGroup: 'inline-flex flex-wrap',
                    view: 'w-64 border border-white border-solid rounded-lg border-opacity-50 pb-2',
                    calendarDaysWrapper: 'grid grid-cols-7',
                    calendarHeaderWrapper: 'grid grid-cols-7',
                    monthWrapper: 'grid grid-cols-4',
                    yearWrapper: 'grid grid-cols-4',
                    input: 'block w-full px-4 py-3 transition duration-150 ease-in-out border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-50 font-medium text-lg',
                    clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-3 top-1/2 h-6 w-6 transform -translate-y-1/2',
                    clearButtonIcon: 'fill-current h-3 w-3'
                },
                classes: {
                    wrapper: 'flex flex-col',
                    dropdownWrapper: 'relative z-10',
                    dropdown: 'origin-top-left absolute rounded shadow bg-violet-900 overflow-hidden mt-1',
                    enterClass: 'opacity-0 scale-95',
                    enterActiveClass: 'transition transform ease-out duration-100',
                    enterToClass: 'opacity-100 scale-100',
                    leaveClass: 'opacity-100 scale-100',
                    leaveActiveClass: 'transition transform ease-in duration-75',
                    leaveToClass: 'opacity-0 scale-95',
                    inlineWrapper: '',
                    inlineViews: 'rounded border mt-1 inline-flex ',
                    inputWrapper: '',
                    input: 'placeholder-gray-500 bg-violet-900 border-violet-1000 focus:border-white focus:border-opacity-50',
                    clearButton: 'hover:bg-violet-600 rounded transition duration-100 ease-in-out text-white',
                    clearButtonIcon: '',
                    viewGroup: '',
                    view: '',
                    navigator: 'pt-2 px-3',
                    navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-violet-600',
                    navigatorViewButtonIcon: 'fill-current text-gray-500',
                    navigatorViewButtonBackIcon: 'fill-current text-gray-500',
                    navigatorViewButtonMonth: 'text-gray-700 font-semibold',
                    navigatorViewButtonYear: 'text-gray-500 ml-1',
                    navigatorViewButtonYearRange: 'text-gray-500 ml-1',
                    navigatorLabel: 'py-1',
                    navigatorLabelMonth: 'text-gray-700 font-semibold',
                    navigatorLabelYear: 'text-gray-500 ml-1',
                    navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-violet-600 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
                    navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-violet-600 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
                    navigatorPrevButtonIcon: 'text-gray-500',
                    navigatorNextButtonIcon: 'text-gray-500',
                    calendarWrapper: 'px-3 pt-2',
                    calendarHeaderWrapper: '',
                    calendarHeaderWeekDay: 'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
                    calendarDaysWrapper: '',
                    calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',
                    otherMonthDay: 'text-sm rounded-full w-7 h-7 mx-auto hover:bg-violet-600 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed',
                    emptyDay: '',
                    inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
                    inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
                    inRangeDay: 'text-sm bg-blue-200 w-full h-7 disabled:opacity-50 disabled:cursor-not-allowed',
                    selectedDay: 'text-sm rounded-full w-7 h-7 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
                    activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
                    highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
                    day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed',
                    today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',
                    monthWrapper: 'px-3 pt-2',
                    selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
                    activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
                    month: 'text-sm rounded w-full h-12 mx-auto hover:bg-violet-600',
                    yearWrapper: 'px-3 pt-2',
                    year: 'text-sm rounded w-full h-12 mx-auto hover:bg-violet-600',
                    selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
                    activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100'
                },
                variants: {
                    danger: {
                        input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
                        clearButton: 'hover:bg-red-200 text-red-500'
                    }
                }
            }
    }
}