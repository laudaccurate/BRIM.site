(function($) {
  'use strict';

  /*========= Sacredia Framework ===========*/
  var SacrediaFramework = (function() {

    var count = 0;

    /* Initialize all required functions */
    function init() {

      setActiveMenuItem();

      customToggleActions();

      formValidation();

      initDatePickers();

      customScrollbar();

    }

    /*-------------------------------------------------------------------------------
    Datatable
    -------------------------------------------------------------------------------*/
    if ($("#data-table-4").length > 0) {
      var dataSet = [
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"],
        ["Paypal", "1YB269950T507594K", "Success", "USD", "$10.55", "Subscription"]
      ];
      var tableFour = $('#data-table-4').DataTable({
        data: dataSet,
        columns: [{
            title: "Payment Gateway"
          },
          {
            title: "Transaction Id"
          },
          {
            title: "Invoice Status"
          },
          {
            title: "Currency"
          },
          {
            title: "Amount"
          },
          {
            title: "Payment Type"
          },
          {
            title: "Action",
            "data": null,
            "defaultContent": "<a href='#'><i class='flaticon-trash'></i></a>"
          }
        ],
      });
    }


    /*-------------------------------------------------------------------------------
    Cookies
-------------------------------------------------------------------------------*/
    function setCookie(cname, cvalue) {
      document.cookie = cname + "=" + cvalue + ";";
    }

    //Return a particular cookie
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    //Checks if a cookie exists
    function checkCookie(cookieToCheck) {
      var cookie = getCookie(cookieToCheck);
      if (cookie != "") {
        return true;
      }
      return false;
    }

    /*-------------------------------------------------------------------------------
  	  Tour Header Strip
	-------------------------------------------------------------------------------*/

    if ($("#step-1").length > 0) {
      const driver = new Driver();

      // Define the steps for introduction
      driver.defineSteps([{
          element: '#step-1',
          popover: {
            title: 'Monitor subscribers',
            description: 'Get a quick look at your total subscribers.',
            position: 'bottom'
          }
        },
        {
          element: '#step-2',
          popover: {
            title: 'Check Donation Activity',
            description: 'Quick look at the total donations.',
            position: 'bottom'
          }
        },
        {
          element: '#step-3',
          popover: {
            title: 'Contact Our Support Team',
            description: 'Visible for administration only.',
            position: 'bottom'
          }
        },
        {
          element: '#step-4',
          popover: {
            title: 'Insights',
            description: 'Track your insights.',
            position: 'top'
          }
        },
        {
          element: '#step-5',
          popover: {
            title: 'Recently Registered Users',
            description: 'Recent users who subscribed',
            position: 'top'
          }
        },
        {
          element: '#step-6',
          popover: {
            title: 'Check Up With Invoices',
            description: 'Recent users who subscribed <form class="dont-show"><label class="ms-checkbox-wrap"> <input type="checkbox" value="" id="dont-show"> <i class="ms-checkbox-check"></i> </label><span>Dont show me again</span></form>',
            position: 'top'
          },
        },
      ]);

      //Hide Tour
      $("body").on('click', '.driver-next-btn', function() {

        if (driver.hasNextStep()) {
          count++;
        }
        if (count == 5 && $("#dont-show").prop("checked") == true) {
          setCookie('disable_tour', 'true');
        }
      });

      if (!checkCookie('disable_tour')) {
        driver.start();
      }

      // Start the introduction
      $("#replay-tour").on('click', function(e) {
        e.stopPropagation();
        driver.start();
      });
    }

    /* Preloaders */
    $(window).on('load', function() {
      $('#preloader-wrap').addClass('loaded');
    });

    /* Sets the active class to the currently viewed page */
    function setActiveMenuItem() {
      var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
      $('.ms-main-aside .menu-item a', $('#ms-side-nav')).each(function() {
        var $this = $(this);
        if (current === "" || current === "index.html") {
          //for root url
          if ($this.attr('href').indexOf("index.html") !== -1) {
            $(this).addClass('active');
            $(this).parents('.collapse').prev().addClass('active');
            if ($(this).parents('.collapse').length) {
              $(this).closest('.collapse').addClass('show');
            }
          }
        } else {
          //for other url
          if ($this.attr('href').indexOf(current) !== -1) {
            $(this).addClass('active');
            $(this).parents('.collapse').prev().addClass('active');
            if ($(this).parents('.collapse').length) {
              $(this).closest('.collapse').addClass('show');
            }
          }
        }
      });
    }

    /*  Custom Toggle Actions */
    function customToggleActions() {
      $(".ms-toggler").bind('click', function() {

        var target = $(this).data('target');
        var toggleType = $(this).data('toggle');

        switch (toggleType) {

          //Aside Left
          case 'slideLeft':
            $(target).toggleClass('ms-aside-open');
            $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
            $("body").toggleClass('ms-aside-left-open');
            break;
            // Aside Right
          case 'slideRight':
            $(target).toggleClass('ms-aside-open');
            $(".ms-aside-overlay.ms-overlay-right").toggleClass('d-block');
            break;
            // Navbar Slide down
          case 'slideDown':
            $(target).toggleClass('ms-slide-down');
            break;
            // Quick bar
          case 'hideQuickBar':
            quickBarReset();
            break;
          default:
            return;

        }

      });
    }

    /* Custom Scrollbar */
    function customScrollbar() {
      // Scroll bar in content
      if ($('.ms-scrollable').length > 0) {
        $('.ms-scrollable').each(function() {
          var ps = new PerfectScrollbar($(this)[0], {
            maxScrollbarLength: 700,
            wheelPropagation: true
          });
        });
      }
      //Special Case for Side nav
      if ($('.ms-aside-scrollable').length > 0) {
        var psAside = new PerfectScrollbar($('.ms-aside-scrollable')[0], {
          maxScrollbarLength: 700,
          wheelPropagation: true,
          wheelSpeed: 0.5
        });

        $(".ms-main-aside").on('click', '.has-chevron', function() {
          psAside.update();
        });
      }

    }

    /* Form Validation */
    function formValidation() {
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    }

    /* Initialize Datepickers */
    function initDatePickers() {
      $(".datepicker").each(function() {
        $(this).datepicker();
      });
    }

    return {
      init: init
    }

  })();

  SacrediaFramework.init();

})(jQuery);
