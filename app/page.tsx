import { RosenHalfDonutGauge, RosenLineChart } from "./components/rosen-charts";

export default function Home() {
  const conversationPercent = 58.19;

  const sessionsValues = [0, 6, 2, 8, 3, 5, 15];

  return (
    <div className="min-h-screen bg-white p-6 text-zinc-900">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="flex flex-col bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-2xl bg-amber-400 text-white">
                <span className="text-sm font-semibold">R</span>
              </div>
              <div className="text-lg font-semibold tracking-tight">flex</div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold text-zinc-400">Menu</div>

              <nav className="mt-3 space-y-1">
                <a
                  className="flex items-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white"
                  href="#"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Dashboard
                </a>

                {[
                  {
                    label: "Orders",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 7h8M8 12h8M8 17h5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Products",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 8h10l-1.5 10h-7L7 8Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 8V6a3 3 0 0 1 6 0v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Analytics",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 18V9M12 18V5M18 18v-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Marketing",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 12h3l8-4v8l-8-4H4v0Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 10.5a3 3 0 0 1 0 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 14v4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
                    href="#"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-xl bg-zinc-50 text-zinc-500">
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-4 text-zinc-400"
                      aria-hidden="true"
                    >
                      <path
                        d="m9 18 6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}

                <a
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
                  href="#"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-xl bg-zinc-50 text-zinc-500">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 7h12v10H6z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 11h4M10 14h3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    Messages
                  </span>
                  <span className="grid size-6 place-items-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                    25
                  </span>
                </a>
              </nav>
            </div>

            <div className="mt-10">
              <div className="text-xs font-semibold text-zinc-400">
                Integrations
              </div>
              <div className="mt-3 space-y-1">
                {[
                  {
                    label: "Jira",
                    iconUrl:
                      "https://orig14.deviantart.net/c92b/f/2015/165/8/6/_icons__gem_point__l__by_voleno-d8xbgrl.png",
                  },
                  {
                    label: "Slack",
                    iconUrl:
                      "https://external-preview.redd.it/9z4WM76YphooWNx_lrMF5MfUkipijCLYkPz-QIU28Lk.jpg?auto=webp&s=2bf1baa2e773dcff30a3ddf177f3cf722168b471",
                  },
                  {
                    label: "Intercom",
                    iconUrl:
                        "https://cdn.discordapp.com/attachments/1235371416237510667/1483159509680783623/intercom.png?ex=69b9936e&is=69b841ee&hm=69c40bdb41b27645912d547601c6a4f2f643aaf5d9a3e0d2d177f4fd60048538&",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
                    href="#"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-zinc-50 text-indigo-600">
                      {item.iconUrl ? (
                        <img
                          src={item.iconUrl}
                          alt={`${item.label} icon`}
                          className="size-5 object-contain"
                        />
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-5"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 12a5 5 0 0 1 10 0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8 16h8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <a
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
                href="#"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-zinc-50 text-zinc-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 7V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 12H3m0 0 3-3m-3 3 3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Logout
              </a>
            </div>
          </aside>

          {/* Main */}
          <main className="bg-white">
            {/* Header */}
            <header className="flex items-center gap-4 bg-white px-6 py-5">
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full bg-zinc-100 text-zinc-500"
                aria-label="Back"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="m14 18-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="relative flex-1">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="m21 21-4.3-4.3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <input
                  className="h-11 w-full max-w-xl rounded-full bg-zinc-100 pl-12 pr-4 text-sm text-zinc-700 outline-none ring-1 ring-transparent placeholder:text-zinc-400 focus:bg-white focus:ring-zinc-200"
                  placeholder="Search"
                />
              </div>

              <div className="ml-auto flex items-center gap-4">
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full bg-zinc-100 text-zinc-500"
                  aria-label="Notifications"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22Z"
                      fill="currentColor"
                      opacity=".35"
                    />
                    <path
                      d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="rounded-2xl bg-white px-4 py-2 ring-1 ring-zinc-200">
                  <div className="text-[11px] font-semibold text-zinc-400">
                    Your Balance
                  </div>
                  <div className="text-sm font-semibold text-indigo-600">
                    $5.456
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-10 overflow-hidden rounded-full ring-1 ring-zinc-200">
                    <img
                      src="https://media.discordapp.net/attachments/1235371416237510667/1483149983342395402/3135768.png?ex=69b98a8f&is=69b8390f&hm=0eb7495cfc43072eee635f1b557b61c9df414c9f95ed2e276e07f9f11656da29&=&format=webp&quality=lossless&width=640&height=640"
                      alt="Profile picture"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-semibold text-zinc-700">
                    Hi, Lay
                  </div>
                </div>
              </div>
            </header>

            {/* Content */}
            <section className="mx-6 my-6 rounded-3xl bg-zinc-100 p-6 ring-1 ring-zinc-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-indigo-600 text-white">
                      <svg viewBox="0 0 24 24" fill="none" className="size-6">
                        <path
                          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h1 className="text-lg font-semibold text-zinc-800">
                      Dashboard
                    </h1>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-zinc-600 ring-1 ring-zinc-200"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="size-5">
                        <path
                          d="M8 7V3m8 4V3M4 11h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      This Month
                      <svg viewBox="0 0 24 24" fill="none" className="size-4">
                        <path
                          d="m6 9 6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="flex h-11 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="size-5">
                        <path
                          d="M12 3v10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="m8 11 4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 21h16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Download Report
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-12 gap-6">
                {/* KPI cards */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                    <div className="flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" className="size-6">
                          <path
                            d="M7 18h10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7 10h10l-1.5 8h-7L7 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 10V8a3 3 0 0 1 6 0v2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-zinc-400">
                          Total Sales
                        </div>
                        <div className="mt-1 flex items-end gap-3">
                          <div className="text-2xl font-semibold tracking-tight">
                            263k
                          </div>
                          <div className="text-xs font-semibold text-emerald-600">
                            ↑ 15.6%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-4">
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                    <div className="flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" className="size-6">
                          <path
                            d="M7 12a5 5 0 0 1 10 0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 20h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9 12a3 3 0 0 1 6 0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-zinc-400">
                          Total Visitors
                        </div>
                        <div className="mt-1 flex items-end gap-3">
                          <div className="text-2xl font-semibold tracking-tight">
                            35k
                          </div>
                          <div className="text-xs font-semibold text-rose-500">
                            ↓ 6.2%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-4">
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                    <div className="flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" className="size-6">
                          <path
                            d="M7 7h10v14H7z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 3h6v4H9z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-zinc-400">
                          Total Orders
                        </div>
                        <div className="mt-1 flex items-end gap-3">
                          <div className="text-2xl font-semibold tracking-tight">
                            165k
                          </div>
                          <div className="text-xs font-semibold text-emerald-600">
                            ↑ 3.5%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sessions card */}
                <div className="col-span-12 lg:col-span-7 lg:self-end">
                  <div className="rounded-2xl bg-white p-6 ring-1 ring-zinc-200">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-bold text-zinc-800">
                        Online Store Sessions
                      </h2>
                      <button
                        type="button"
                        className="h-9 rounded-full bg-zinc-100 px-4 text-xs font-semibold text-zinc-600"
                      >
                        View Report
                      </button>
                    </div>

                    <div className="mt-6 flex items-start justify-between gap-6">
                      <div className="flex items-start gap-3">
                        <div className="grid size-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                          <svg viewBox="0 0 24 24" fill="none" className="size-6">
                            <path
                              d="M7 12a5 5 0 0 1 10 0"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M5 20h14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9 12a3 3 0 0 1 6 0"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-zinc-400">
                            Visitors
                          </div>
                          <div className="mt-2 text-3xl font-bold tracking-tight">
                            68
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-[auto_auto] grid-rows-2 items-center gap-x-6 gap-y-3 pt-1 text-right">
                        <div className="col-start-2 row-start-1 text-xs font-semibold text-emerald-600">
                          ↑ 15.6%
                        </div>
                        <div className="col-start-1 row-start-2 text-xs font-semibold text-indigo-600">
                          26
                        </div>
                        <div className="col-start-2 row-start-2 text-xs font-semibold text-rose-500">
                          ↓ 1.6%
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-zinc-300 pt-5">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-zinc-400">
                          Sessions Over Time
                        </div>
                        <button
                          type="button"
                          className="flex h-9 items-center gap-2 rounded-full bg-zinc-100 px-4 text-xs font-semibold text-zinc-600"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="size-4"
                          >
                            <path
                              d="M8 7V3m8 4V3M4 11h16"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                          </svg>
                          February
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="size-4"
                          >
                            <path
                              d="m6 9 6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-3 rounded-2xl bg-white">
                        <div className="h-36 w-full">
                          <RosenLineChart values={sessionsValues} />
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                        <button
                          type="button"
                          className="grid size-10 place-items-center rounded-full bg-white text-zinc-400 ring-1 ring-zinc-200"
                          aria-label="Previous"
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="size-4">
                            <path
                              d="m14 18-6-6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        <div className="relative grid size-10 place-items-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                          <div className="pointer-events-none absolute inset-x-0 -bottom-6 mx-auto size-10 rounded-full bg-indigo-600/45 blur-xl" />
                          21
                        </div>

                        <div className="text-xs font-semibold text-zinc-400">22</div>
                        <div className="text-xs font-semibold text-zinc-400">23</div>
                        <div className="text-xs font-semibold text-zinc-400">24</div>
                        <div className="text-xs font-semibold text-zinc-400">25</div>

                        <button
                          type="button"
                          className="grid size-10 place-items-center rounded-full bg-white text-zinc-400 ring-1 ring-zinc-200"
                          aria-label="Next"
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="size-4">
                            <path
                              d="m10 6 6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column stack (banner + conversion) */}
                <div className="col-span-12 lg:col-span-5">
                  <div className="grid gap-6">
                    {/* Promo banner */}
                    <div className="relative overflow-hidden rounded-2xl bg-indigo-600 p-6 text-white ring-1 ring-indigo-600/10">
                      <div className="text-sm font-semibold">Need More Stats?</div>
                      <div className="mt-2 max-w-xs text-xs font-medium text-white/80">
                        Upgrade to pro for added benefits.
                      </div>
                      <button
                        type="button"
                        className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-semibold text-white"
                      >
                        <span className="grid size-7 place-items-center rounded-full bg-white/15">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="size-4"
                            aria-hidden="true"
                          >
                            <path
                              d="M12 7v10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7 12h10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        Go Pro Now
                      </button>

                      {/* Decorative shapes */}
                      <div className="pointer-events-none absolute -right-6 -top-10 size-44 rounded-full bg-white/10" />
                      <div className="pointer-events-none absolute -right-12 top-12 size-56 rounded-full bg-white/10" />
                      <div className="pointer-events-none absolute right-6 top-10 grid size-16 place-items-center rounded-2xl bg-white/15">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-10"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 3v10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="m8 11 4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 21h16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Conversation gauge */}
                    <div className="rounded-2xl bg-white p-6 ring-1 ring-zinc-200">
                      <div className="text-sm font-semibold text-zinc-800">
                        Conversion
                      </div>

                      <div className="mt-4 flex items-center justify-center">
                        <div className="relative h-[180px] w-full max-w-[360px]">
                          <RosenHalfDonutGauge value={conversationPercent} />

                          <div className="absolute inset-x-0 top-[84px] text-center">
                            <div className="text-[40px] leading-none font-semibold tracking-tight text-zinc-900 [font-size:clamp(1.75rem,3.2vw,2.5rem)]">
                              {conversationPercent.toFixed(2).replace(".", ",")}%
                            </div>
                            <div className="mt-1 text-sm font-semibold text-emerald-600">
                              ↑ 3.5%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-xs font-semibold text-zinc-500">
                        <div className="flex items-center gap-2">
                          <span className="grid size-6 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="size-4"
                              aria-hidden="true"
                            >
                              <path
                                d="M12 8v8"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M8 12h8"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          <span>Income</span>
                          <span className="text-zinc-400">$542,317</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="grid size-6 place-items-center rounded-full bg-rose-50 text-rose-600">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="size-4"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 12h8"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          <span>Expences</span>
                          <span className="text-zinc-400">$497,456</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
