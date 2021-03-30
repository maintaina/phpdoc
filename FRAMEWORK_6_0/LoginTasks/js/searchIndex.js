Search.appendIndex(
    [
                {
            "fqsen": "\\Horde_LoginTasks_Backend",
            "name": "Horde_LoginTasks_Backend",
            "summary": "The\u0020Horde_LoginTasks_Backend\u003A\u003A\u0020class\u0020provides\u0020the\u0020specific\u0020backend\u0020providing\nthe\u0020dependencies\u0020of\u0020the\u0020LoginTasks\u0020system\u0020\u0028e.g.\u0020preferences,\u0020session\u0020storage,\nredirection\u0020facilites,\u0020shutdown\u0020management\u0020etc.\u0029",
            "url": "classes/Horde-LoginTasks-Backend.html"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003AgetTasklistFromCache\u0028\u0029",
            "name": "getTasklistFromCache",
            "summary": "Retrieve\u0020a\u0020cached\u0020tasklist\u0020if\u0020it\u0020exists.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_getTasklistFromCache"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003AstoreTasklistInCache\u0028\u0029",
            "name": "storeTasklistInCache",
            "summary": "Store\u0020a\u0020login\u0020tasklist\u0020in\u0020the\u0020cache.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_storeTasklistInCache"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003AgetTasks\u0028\u0029",
            "name": "getTasks",
            "summary": "Get\u0020the\u0020class\u0020names\u0020of\u0020the\u0020task\u0020classes\u0020that\u0020need\u0020to\u0020be\u0020performed.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_getTasks"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003AgetLastRun\u0028\u0029",
            "name": "getLastRun",
            "summary": "Get\u0020the\u0020information\u0020about\u0020the\u0020last\u0020time\u0020the\u0020tasks\u0020were\u0020run.\u0020Array\u0020keys\nare\u0020app\u0020names,\u0020values\u0020are\u0020last\u0020run\u0020timestamps.\u0020Special\u0020key\u0020\u0027_once\u0027\ncontains\u0020list\u0020of\u0020ONCE\u0020tasks\u0020previously\u0020run.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_getLastRun"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003AsetLastRun\u0028\u0029",
            "name": "setLastRun",
            "summary": "Store\u0020the\u0020information\u0020about\u0020the\u0020last\u0020time\u0020the\u0020tasks\u0020were\u0020run.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_setLastRun"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003AmarkLastRun\u0028\u0029",
            "name": "markLastRun",
            "summary": "Mark\u0020the\u0020current\u0020time\u0020as\u0020time\u0020the\u0020login\u0020tasks\u0020were\u0020run\u0020for\u0020the\u0020last\ntime.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_markLastRun"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003Aredirect\u0028\u0029",
            "name": "redirect",
            "summary": "Redirect\u0020to\u0020the\u0020given\u0020URL.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_redirect"
        },                {
            "fqsen": "\\Horde_LoginTasks_Backend\u003A\u003AgetLoginTasksUrl\u0028\u0029",
            "name": "getLoginTasksUrl",
            "summary": "Return\u0020the\u0020URL\u0020of\u0020the\u0020login\u0020tasks\u0020view.",
            "url": "classes/Horde-LoginTasks-Backend.html#method_getLoginTasksUrl"
        },                {
            "fqsen": "\\Horde_LoginTasks_SystemTask",
            "name": "Horde_LoginTasks_SystemTask",
            "summary": "Abstract\u0020class\u0020to\u0020allow\u0020for\u0020modularization\u0020of\u0020specific\u0020system\u0020login\u0020tasks\nthat\u0020are\u0020always\u0020run\u0020on\u0020login.",
            "url": "classes/Horde-LoginTasks-SystemTask.html"
        },                {
            "fqsen": "\\Horde_LoginTasks_SystemTask\u003A\u003Aexecute\u0028\u0029",
            "name": "execute",
            "summary": "Do\u0020login\u0020task\u0020\u0028if\u0020it\u0020has\u0020been\u0020confirmed\u0029.",
            "url": "classes/Horde-LoginTasks-SystemTask.html#method_execute"
        },                {
            "fqsen": "\\Horde_LoginTasks_SystemTask\u003A\u003Askip\u0028\u0029",
            "name": "skip",
            "summary": "Skip\u0020the\u0020current\u0020task\u003F\u0020\u0020If\u0020true,\u0020will\u0020not\u0020run\u0020on\u0020this\u0020access\u0020but\nwill\u0020attempt\u0020to\u0020run\u0020on\u0020the\u0020next\u0020access.",
            "url": "classes/Horde-LoginTasks-SystemTask.html#method_skip"
        },                {
            "fqsen": "\\Horde_LoginTasks_SystemTask\u003A\u003A\u0024active",
            "name": "active",
            "summary": "Should\u0020the\u0020task\u0020be\u0020run\u003F",
            "url": "classes/Horde-LoginTasks-SystemTask.html#property_active"
        },                {
            "fqsen": "\\Horde_LoginTasks_SystemTask\u003A\u003A\u0024interval",
            "name": "interval",
            "summary": "The\u0020interval\u0020at\u0020which\u0020to\u0020run\u0020the\u0020task.",
            "url": "classes/Horde-LoginTasks-SystemTask.html#property_interval"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task",
            "name": "Horde_LoginTasks_Task",
            "summary": "Abstract\u0020class\u0020to\u0020allow\u0020for\u0020modularization\u0020of\u0020specific\u0020login\u0020tasks.",
            "url": "classes/Horde-LoginTasks-Task.html"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003Aexecute\u0028\u0029",
            "name": "execute",
            "summary": "Do\u0020login\u0020task\u0020\u0028if\u0020it\u0020has\u0020been\u0020confirmed\u0029.",
            "url": "classes/Horde-LoginTasks-Task.html#method_execute"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003Adescribe\u0028\u0029",
            "name": "describe",
            "summary": "Return\u0020description\u0020information\u0020for\u0020the\u0020login\u0020task.",
            "url": "classes/Horde-LoginTasks-Task.html#method_describe"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003AneedsDisplay\u0028\u0029",
            "name": "needsDisplay",
            "summary": "Does\u0020the\u0020task\u0020need\u0020to\u0020be\u0020displayed\u003F",
            "url": "classes/Horde-LoginTasks-Task.html#method_needsDisplay"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003AjoinDisplayWith\u0028\u0029",
            "name": "joinDisplayWith",
            "summary": "Indicates\u0020if\u0020the\u0020display\u0020of\u0020the\u0020current\u0020task\u0020should\u0020be\u0020joined\u0020with\u0020the\ngiven\u0020previous\u0020task.",
            "url": "classes/Horde-LoginTasks-Task.html#method_joinDisplayWith"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003A_isConfirmTask\u0028\u0029",
            "name": "_isConfirmTask",
            "summary": "Is\u0020this\u0020a\u0020confirmation\u0020task\u003F",
            "url": "classes/Horde-LoginTasks-Task.html#method__isConfirmTask"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003A\u0024active",
            "name": "active",
            "summary": "Should\u0020the\u0020task\u0020be\u0020run\u003F",
            "url": "classes/Horde-LoginTasks-Task.html#property_active"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003A\u0024display",
            "name": "display",
            "summary": "The\u0020style\u0020of\u0020the\u0020page\u0020output.",
            "url": "classes/Horde-LoginTasks-Task.html#property_display"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003A\u0024interval",
            "name": "interval",
            "summary": "The\u0020interval\u0020at\u0020which\u0020to\u0020run\u0020the\u0020task.",
            "url": "classes/Horde-LoginTasks-Task.html#property_interval"
        },                {
            "fqsen": "\\Horde_LoginTasks_Task\u003A\u003A\u0024priority",
            "name": "priority",
            "summary": "The\u0020priority\u0020of\u0020the\u0020task.",
            "url": "classes/Horde-LoginTasks-Task.html#property_priority"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist",
            "name": "Horde_LoginTasks_Tasklist",
            "summary": "The\u0020Horde_LoginTasks_Tasklist\u003A\u003A\u0020class\u0020is\u0020used\u0020to\u0020store\u0020the\u0020list\u0020of\nlogin\u0020tasks\u0020that\u0020need\u0020to\u0020be\u0020run\u0020during\u0020this\u0020login.",
            "url": "classes/Horde-LoginTasks-Tasklist.html"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003AaddTask\u0028\u0029",
            "name": "addTask",
            "summary": "Adds\u0020a\u0020task\u0020to\u0020the\u0020tasklist.",
            "url": "classes/Horde-LoginTasks-Tasklist.html#method_addTask"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003Aready\u0028\u0029",
            "name": "ready",
            "summary": "Returns\u0020the\u0020list\u0020of\u0020tasks\u0020to\u0020perform.",
            "url": "classes/Horde-LoginTasks-Tasklist.html#method_ready"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003AneedDisplay\u0028\u0029",
            "name": "needDisplay",
            "summary": "Returns\u0020the\u0020next\u0020batch\u0020of\u0020tasks\u0020that\u0020need\u0020display.",
            "url": "classes/Horde-LoginTasks-Tasklist.html#method_needDisplay"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003AisDone\u0028\u0029",
            "name": "isDone",
            "summary": "Are\u0020all\u0020tasks\u0020complete\u003F",
            "url": "classes/Horde-LoginTasks-Tasklist.html#method_isDone"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003A\u0024target",
            "name": "target",
            "summary": "The\u0020URL\u0020of\u0020the\u0020web\u0020page\u0020to\u0020load\u0020after\u0020login\u0020tasks\u0020are\u0020complete.",
            "url": "classes/Horde-LoginTasks-Tasklist.html#property_target"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003A\u0024processed",
            "name": "processed",
            "summary": "Has\u0020this\u0020tasklist\u0020been\u0020processed\u0020yet\u003F",
            "url": "classes/Horde-LoginTasks-Tasklist.html#property_processed"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003A\u0024_tasks",
            "name": "_tasks",
            "summary": "The\u0020list\u0020of\u0020tasks\u0020to\u0020run\u0020during\u0020this\u0020login.",
            "url": "classes/Horde-LoginTasks-Tasklist.html#property__tasks"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003A\u0024_stasks",
            "name": "_stasks",
            "summary": "The\u0020list\u0020of\u0020system\u0020tasks\u0020to\u0020run\u0020during\u0020this\u0020login.",
            "url": "classes/Horde-LoginTasks-Tasklist.html#property__stasks"
        },                {
            "fqsen": "\\Horde_LoginTasks_Tasklist\u003A\u003A\u0024_ptr",
            "name": "_ptr",
            "summary": "Current\u0020task\u0020location\u0020pointer.",
            "url": "classes/Horde-LoginTasks-Tasklist.html#property__ptr"
        },                {
            "fqsen": "\\Horde_LoginTasks_Translation",
            "name": "Horde_LoginTasks_Translation",
            "summary": "Horde_LoginTasks_Translation\u0020is\u0020the\u0020translation\u0020wrapper\u0020class\u0020for\u0020Horde_LoginTasks.",
            "url": "classes/Horde-LoginTasks-Translation.html"
        },                {
            "fqsen": "\\Horde_LoginTasks_Translation\u003A\u003A\u0024_domain",
            "name": "_domain",
            "summary": "The\u0020translation\u0020domain",
            "url": "classes/Horde-LoginTasks-Translation.html#property__domain"
        },                {
            "fqsen": "\\Horde_LoginTasks_Translation\u003A\u003A\u0024_pearDirectory",
            "name": "_pearDirectory",
            "summary": "The\u0020absolute\u0020PEAR\u0020path\u0020to\u0020the\u0020translations\u0020for\u0020the\u0020default\u0020gettext\u0020handler.",
            "url": "classes/Horde-LoginTasks-Translation.html#property__pearDirectory"
        },                {
            "fqsen": "\\Horde_LoginTasks",
            "name": "Horde_LoginTasks",
            "summary": "The\u0020Horde_LoginTasks\u003A\u003A\u0020class\u0020provides\u0020a\u0020set\u0020of\u0020methods\u0020for\u0020dealing\u0020with\nlogin\u0020tasks\u0020to\u0020run\u0020upon\u0020login\u0020to\u0020Horde\u0020applications.",
            "url": "classes/Horde-LoginTasks.html"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Constructor.",
            "url": "classes/Horde-LoginTasks.html#method___construct"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003Ashutdown\u0028\u0029",
            "name": "shutdown",
            "summary": "Tasks\u0020to\u0020run\u0020on\u0020session\u0020shutdown.",
            "url": "classes/Horde-LoginTasks.html#method_shutdown"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003A_createTaskList\u0028\u0029",
            "name": "_createTaskList",
            "summary": "Creates\u0020the\u0020list\u0020of\u0020login\u0020tasks\u0020that\u0020are\u0020available\u0020for\u0020this\u0020session\n\u0028stored\u0020in\u0020a\u0020Horde_LoginTasks_Tasklist\u0020object\u0029.",
            "url": "classes/Horde-LoginTasks.html#method__createTaskList"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003ArunTasks\u0028\u0029",
            "name": "runTasks",
            "summary": "Do\u0020operations\u0020needed\u0020for\u0020this\u0020login.",
            "url": "classes/Horde-LoginTasks.html#method_runTasks"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AdisplayTasks\u0028\u0029",
            "name": "displayTasks",
            "summary": "Generate\u0020the\u0020list\u0020of\u0020tasks\u0020that\u0020need\u0020to\u0020be\u0020displayed.",
            "url": "classes/Horde-LoginTasks.html#method_displayTasks"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AgetLoginTasksUrl\u0028\u0029",
            "name": "getLoginTasksUrl",
            "summary": "Generate\u0020the\u0020login\u0020tasks\u0020URL.",
            "url": "classes/Horde-LoginTasks.html#method_getLoginTasksUrl"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AgetLabels\u0028\u0029",
            "name": "getLabels",
            "summary": "Labels\u0020for\u0020the\u0020class\u0020constants.",
            "url": "classes/Horde-LoginTasks.html#method_getLabels"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AYEARLY",
            "name": "YEARLY",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_YEARLY"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AMONTHLY",
            "name": "MONTHLY",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_MONTHLY"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AWEEKLY",
            "name": "WEEKLY",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_WEEKLY"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003ADAILY",
            "name": "DAILY",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_DAILY"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AEVERY",
            "name": "EVERY",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_EVERY"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AFIRST_LOGIN",
            "name": "FIRST_LOGIN",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_FIRST_LOGIN"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003AONCE",
            "name": "ONCE",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_ONCE"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003ADISPLAY_CONFIRM_NO",
            "name": "DISPLAY_CONFIRM_NO",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_DISPLAY_CONFIRM_NO"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003ADISPLAY_CONFIRM_YES",
            "name": "DISPLAY_CONFIRM_YES",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_DISPLAY_CONFIRM_YES"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003ADISPLAY_AGREE",
            "name": "DISPLAY_AGREE",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_DISPLAY_AGREE"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003ADISPLAY_NOTICE",
            "name": "DISPLAY_NOTICE",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_DISPLAY_NOTICE"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003ADISPLAY_NONE",
            "name": "DISPLAY_NONE",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_DISPLAY_NONE"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003APRIORITY_HIGH",
            "name": "PRIORITY_HIGH",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_PRIORITY_HIGH"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003APRIORITY_NORMAL",
            "name": "PRIORITY_NORMAL",
            "summary": "",
            "url": "classes/Horde-LoginTasks.html#constant_PRIORITY_NORMAL"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003A\u0024_backend",
            "name": "_backend",
            "summary": "The\u0020Horde_LoginTasks_Backend\u0020object\u0020provides\u0020all\u0020utilities\u0020we\u0020need\u0020for\nhandling\u0020the\u0020login\u0020tasks.",
            "url": "classes/Horde-LoginTasks.html#property__backend"
        },                {
            "fqsen": "\\Horde_LoginTasks\u003A\u003A\u0024_tasklist",
            "name": "_tasklist",
            "summary": "The\u0020Horde_LoginTasks_Tasklist\u0020object\u0020for\u0020this\u0020login.",
            "url": "classes/Horde-LoginTasks.html#property__tasklist"
        },                {
            "fqsen": "\\",
            "name": "\\",
            "summary": "",
            "url": "namespaces/default.html"
        }            ]
);