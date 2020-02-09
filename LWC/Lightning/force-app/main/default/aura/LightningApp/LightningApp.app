<aura:application extends="force:slds">
    <!-- used LWC to Lightning-->
    <c:contactList/>
    <c:parentPaginator onnext="{!c.handleNext}" onprevious="{!c.handlePrev}" />
</aura:application>