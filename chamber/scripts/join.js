const showDialogue = document.querySelector('#dsDialogue');
const npMembers = document.querySelector('#NP-M');
const bMembers = document.querySelector('#Bronze-M');
const sMembers = document.querySelector('#Silver-M');
const gMembers = document.querySelector('#Gold-M');

document.getElementById('timestamp').value = new Date().toISOString();


npMembers.addEventListener('click', ()=> {
    showDialogue.innerHTML = `
    <span class="closeBtn" autofocus>❌</span>
    <h2>Non-Profit Membership</h2>
    
    <p>Designed for non-profit organizations, this membership offers 
    access to networking events, community outreach programs, and 
    discounted rates on chamber services. It's perfect for those 
    looking to make a positive impact in the Abuja area.</p>
    `;
    
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', ()=> {
        showDialogue.close()
    })

    showDialogue.showModal()
})



bMembers.addEventListener('click', ()=> {
    showDialogue.innerHTML = `
    <span class="closeBtn" autofocus>❌</span>
    <h2>Bronze Membership</h2>
    
    <p>Ideal for small businesses, the Bronze Membership provides 
    essential benefits such as listing in the chamber directory, 
    access to business workshops, and invitations to networking events. 
    It's a great starting point for businesses looking to 
    grow their presence.</p>
    `;
    
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', ()=> {
        showDialogue.close()
    })

    showDialogue.showModal()
})

sMembers.addEventListener('click', ()=> {
    showDialogue.innerHTML = `
    <span class="closeBtn" autofocus>❌</span>
    <h2>Silver Membership</h2>
    
    <p>The Silver Membership offers enhanced benefits, including 
    priority listing in the chamber directory, free admission to 
    select events, and access to exclusive marketing opportunities. 
    This level is perfect for businesses aiming to expand their 
    reach and influence.</p>
    `;
    
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', ()=> {
        showDialogue.close()
    })

    showDialogue.showModal()
})


gMembers.addEventListener('click', ()=> {
    showDialogue.innerHTML = `
    <span class="closeBtn" autofocus>❌</span>
    <h2>Gold Membership</h2>
    
    <p>The Gold Membership is the premium option, offering all 
    the benefits of the Silver Membership plus additional perks 
    like VIP access to events, personalized business support, 
    and opportunities for leadership roles within the chamber. 
    It's ideal for businesses looking to maximize their 
    impact and visibility.</p>
    `;
    
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', ()=> {
        showDialogue.close()
    })

    showDialogue.showModal()
})